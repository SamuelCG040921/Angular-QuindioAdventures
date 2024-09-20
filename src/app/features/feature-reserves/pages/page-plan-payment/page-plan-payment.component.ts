import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


import { TarifaService } from '../../services/tarifa.service';
import { CountPeopleService } from '../../services/count-people.service';
import { Subscription } from 'rxjs';
import { ReservesService } from '../../services/reserves.service';
import { PlanInfo } from '../../models/plansById';
import { PlansService } from '../../services/plans.service';

interface OccupiedDate {
  fecha: string; // Suponiendo que las fechas están en formato de cadena
}

@Component({
  selector: 'app-page-plan-payment',
  templateUrl: './page-plan-payment.component.html',
  styleUrl: './page-plan-payment.component.scss'
})
export class PagePlanPaymentComponent {
  tarifas: any[] = [];
  miVariable: any;
  reservaForm: FormGroup;
  plan: PlanInfo | null = null;
  loading: boolean = true;
  error: string | null = null;
  isAlertOpen: boolean = false;
  isErrorAlertOpen: boolean = false;
  firstImage: string | null = null;
  tarifaSeleccionada: any | null = null;
  formattedPrice: string | null = null;
  fecha_inicio: string | null = null;
  totalPersonsSubscription!: Subscription;
  routerSubscription!: Subscription;
  precioTotal: number | null = null; // Nueva variable para el precio total
  totalPersons: number | null = null;
  isLoading: boolean = false;
  occupiedDates: (OccupiedDate | string | Date)[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private planService: PlansService,
    private route: ActivatedRoute,
    private tarifaService: TarifaService,
    private personCountService: CountPeopleService,
    private reservesService: ReservesService
  ) {
    this.reservaForm = this.fb.group({
      documento: ['', Validators.required],
      cantidadPersonas: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      checkin: ['', [Validators.required, this.checkInDateValidator.bind(this)]],
    });

    this.totalPersonsSubscription = this.personCountService.totalPersons$.subscribe((count: number) => {
      this.reservaForm.patchValue({ cantidadPersonas: count });
    });
  }

  ngOnInit(): void {
    this.totalPersonsSubscription = this.personCountService.totalPersons$.subscribe((count: number) => {
      this.totalPersons = count; // Almacenar el total de personas
      this.reservaForm.patchValue({ cantidadPersonas: count });
    });

    const valorGuardado = localStorage.getItem('miVariable');
    this.miVariable = valorGuardado ? JSON.parse(valorGuardado) : 0;

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadPlan(id);
        this.fetchOccupiedDates(+id);
      } else {
        this.error = 'ID del plan no disponible';
        this.loading = false;
      }
    });

    this.reservaForm.get('checkin')?.valueChanges.subscribe(value => {
      this.fecha_inicio = value;
      this.fetchTarifas(); // Obtener tarifas basadas en la fecha de inicio
    });
    

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/page-plan-payment') {
          this.miVariable = 0;
        }
      }
    });
  }

  loadPlan(id: string): void {
    this.planService.getPlanById(id)
      .then(plan => {
        this.plan = plan;
        const imagenesKeys = Object.keys(this.plan.imagenes);
        if (imagenesKeys.length > 0) {
          this.firstImage = this.plan.imagenes[imagenesKeys[0]];
        }
        this.loading = false;
      })
      .catch(error => {
        this.error = 'Error al cargar el chalet';
        this.loading = false;
      });
  }

  fetchTarifas(): void {
    if (this.fecha_inicio && this.plan) {
      const idPlan = this.plan.id_planV
      this.tarifaService.getTarifasPorFechaPlan(idPlan, this.fecha_inicio)
        .subscribe(
          response => {
            const tarifasArray = response?.tarifas;
            if (Array.isArray(tarifasArray) && tarifasArray.length > 0) {
              if (Array.isArray(tarifasArray[0])) {
                this.tarifas = tarifasArray[0];
              } else {
                this.error = 'Datos de tarifas incorrectos.';
              }
            } else {
              this.error = 'No se encontraron tarifas disponibles.';
            }
          },
          error => {
            this.error = 'Error al obtener tarifas';
          }
        );
    }
  }
  openAlert() {
    this.isAlertOpen = true;
  }

  closeAlert() {
    this.isAlertOpen = false;
  }

  openErrorAlert() {
    this.isErrorAlertOpen = true;
  }

  closeErrorAlert() {
    this.isErrorAlertOpen = false;
  }

  onSubmit() {
    if (this.reservaForm.valid && this.tarifaSeleccionada) {
      this.isLoading = true;
      const formData = {
        ...this.reservaForm.value,
        fecha_inicio: this.fecha_inicio,
        tarifaSeleccionada: this.tarifaSeleccionada,
        precioTotal: this.precioTotal
      };

      const tipoReserva = 'plan';

      this.reservesService.createOrder(formData.precioTotal, tipoReserva).subscribe(
        (orderResponse) => {
          console.log('Orden creada exitosamente:', orderResponse);
  
          const reservaData = {
            ...formData,
            orderId: orderResponse.id 
          };

          if (orderResponse.sandbox_init_point) {
            window.location.href = orderResponse.sandbox_init_point;
          }
          this.reservesService.enviarReservaPlan(formData).subscribe(
            response => {
              this.isLoading = false;
              console.log('Reserva creada exitosamente:', response);
              setTimeout(() => {
                this.closeAlert(); 
              }, 2300); 
            },
            error => {
              this.isLoading = false;
              console.error('Error al crear la reserva:', error);
              this.openErrorAlert();
              setTimeout(() => {
                this.closeErrorAlert();
              }, 2300); 
            }
          );
        }
      )
    } else {
      console.log('Formulario inválido o tarifa no seleccionada');
      this.openErrorAlert();
      setTimeout(() => {
        this.closeErrorAlert();
      }, 2300);
    }
  }

  ngOnDestroy(): void {
    if (this.totalPersonsSubscription) {
      this.totalPersonsSubscription.unsubscribe();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  
  isFieldInvalid(fieldName: string): boolean {
    const control = this.reservaForm.get(fieldName);
    const isRequiredError = control?.hasError('required');
    const isInvalidDate = control?.value && new Date(control.value) <= new Date();
    
    // Si hay error de requerimiento o la fecha es inválida
    return (isRequiredError || isInvalidDate) && (control?.touched || control?.dirty);
  }

  isDateOccupiedError(): boolean {
  const checkinControl = this.reservaForm.get('checkin');
  
  if (checkinControl) {
      return checkinControl.hasError('dateOccupied') && (checkinControl.touched || checkinControl.dirty);
  }

  return false;
  }


  selectTarifa(tarifa: any): void {
    this.tarifaSeleccionada = tarifa;
    this.formattedPrice = tarifa.precio ? this.formatPrice(tarifa.precio) : null;
    this.calculateTotalPrice(); // Calcular el precio total cuando se seleccione una tarifa
  }

  calculateTotalPrice(): void {
    if (this.totalPersons && this.tarifaSeleccionada) {
      const pricePerDay = this.tarifaSeleccionada.precio || 0;
      const totalPeople = this.totalPersons;
      const totalPrice = totalPeople * pricePerDay;
  
      this.precioTotal = totalPrice; // Almacena como número para enviar al backend
      this.formattedPrice = this.formatPrice(totalPrice); // Formatea el precio total
    } else {
      this.precioTotal = null;
      this.formattedPrice = null;
    }
  }

  formatPrice(price: number): string {
    return price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
  }

  checkInDateValidator = (control: AbstractControl): ValidationErrors | null => {
    const selectedDate = control.value;
  
    if (!selectedDate) {
      return null;
    }
  
    if (this.isDateOccupied(new Date(selectedDate))) {
      return { dateOccupied: true };
    }
  
    return null;
  };

  onCheckInDateChange() {
    const checkinControl = this.reservaForm.get('checkin');
    if (checkinControl) {
      checkinControl.updateValueAndValidity();
    }
  }

  fetchOccupiedDates(idPlan: number): void {
    this.reservesService.getFechasOcupadasPlan(idPlan)
      .then(dates => {
        this.occupiedDates = dates;
        console.log(this.occupiedDates);
      })
      .catch(error => {
        console.error('Error al obtener fechas ocupadas', error);
        this.error = 'Error al obtener fechas ocupadas';
      });
  }
  
  isDateOccupied(selectedDate: Date): boolean {
    return this.occupiedDates.some((occupiedDate: OccupiedDate | string | Date) => {
      let occupiedDateObj: Date;

      if (typeof occupiedDate === 'object' && 'fecha' in occupiedDate) {
        occupiedDateObj = new Date((occupiedDate as OccupiedDate).fecha);
      } else if (typeof occupiedDate === 'string' || occupiedDate instanceof String) {
        occupiedDateObj = new Date(occupiedDate);
      } else if (occupiedDate instanceof Date) {
        occupiedDateObj = occupiedDate;
      } else {
        console.error('El formato de la fecha ocupada es inválido:', occupiedDate);
        return false;
      }

      if (isNaN(occupiedDateObj.getTime())) {
        console.error('Fecha ocupada no válida:', occupiedDateObj);
        return false;
      }

      // Comparar solo la parte de la fecha, ignorando la hora
      return occupiedDateObj.toDateString() === selectedDate.toDateString();
    });
  }
}