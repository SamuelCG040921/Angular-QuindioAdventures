import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


import { TarifaService } from '../../services/tarifa.service';
import { CountPeopleService } from '../../services/count-people.service';
import { Subscription } from 'rxjs';
import { ReservesService } from '../../services/reserves.service';
import { PlanInfo } from '../../models/plansById';
import { PlansService } from '../../services/plans.service';

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
      checkin: ['', Validators.required],
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

      console.log(formData,2345);
      
  
      this.reservesService.enviarReservaPlan(formData).subscribe(
        response => {
          this.isLoading = false;
          console.log('Reserva creada exitosamente:', response);
          // Aquí puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
          this.openAlert();
          setTimeout(() => {
            this.closeAlert(); // Redirigir al home después de 2 segundos
          }, 2000); // Muestra la alerta de éxito
        },
        error => {
          this.isLoading = false;
          console.error('Error al crear la reserva:', error);
          this.openErrorAlert();
          setTimeout(() => {
            this.closeErrorAlert();// Redirigir al home después de 2 segundos
          }, 2000); // Muestra la alerta de error
        }
      );
    } else {
      console.log('Formulario inválido o tarifa no seleccionada');
      this.openErrorAlert();
      setTimeout(() => {
        this.closeErrorAlert(); // Redirigir al home después de 2 segundos
      }, 2000);
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

  isFieldInvalid(field: string): boolean {
    const control = this.reservaForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
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
    // Formatea el precio a una cadena con separadores de miles y sin decimales
    return price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
  }
}