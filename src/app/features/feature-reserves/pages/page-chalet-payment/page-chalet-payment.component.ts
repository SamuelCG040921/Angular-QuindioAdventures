import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ChaletInfo } from '../../models/chaletsById';
import { ChaletsService } from '../../services/chalets.service';
import { TarifaService } from '../../services/tarifa.service';
import { CountPeopleService } from '../../services/count-people.service';
import { Subscription } from 'rxjs';
import { ReservesService } from '../../services/reserves.service';

interface OccupiedDate {
  fechaInicio: Date;
  fechaFin:Date
}

@Component({
  selector: 'app-page-chalet-payment',
  templateUrl: './page-chalet-payment.component.html',
  styleUrls: ['./page-chalet-payment.component.scss']
})
export class PageChaletPaymentComponent implements OnInit, OnDestroy {
  tarifas: any[] = [];
  miVariable: any;
  reservaForm: FormGroup;
  chalet: ChaletInfo | null = null;
  loading: boolean = true;
  error: string | null = null;
  isAlertOpen: boolean = false;
  isErrorAlertOpen: boolean = false;
  firstImage: string | null = null;
  tarifaSeleccionada: any | null = null;
  formattedPrice: string | null = null;
  fecha_inicio: string | null = null;
  fecha_fin: string | null = null;
  totalPersonsSubscription!: Subscription;
  routerSubscription!: Subscription;
  precioTotal: number | null = null; 
  checkInDateError: boolean = false;
  checkoutDateError: boolean = false;
  dateRangeError: boolean = false;
  isLoading: boolean = false;
  occupiedDates: (OccupiedDate | string | Date)[] = [];
  intermediateDates: Date[] = [];
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private chaletsService: ChaletsService,
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
      checkout: ['', [Validators.required, this.checkOutDateValidator.bind(this)]]
    });

    this.totalPersonsSubscription = this.personCountService.totalPersons$.subscribe((count: number) => {
      this.reservaForm.patchValue({ cantidadPersonas: count });
    });
  }

  ngOnInit(): void {
    const valorGuardado = localStorage.getItem('miVariable');
    this.miVariable = valorGuardado ? JSON.parse(valorGuardado) : 0;

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadChalet(id);
        this.fetchOccupiedDates(+id);
      } else {
        this.error = 'ID del chalet no disponible';
        this.loading = false;
      }
    });

    this.reservaForm.get('checkin')?.valueChanges.subscribe(value => {
      this.fecha_inicio = value;
      this.fetchTarifas(); 
    });

    this.reservaForm.get('checkout')?.valueChanges.subscribe(value => {
      this.fecha_fin = value;
      this.calculateTotalPrice();
    });

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/page-chalet-payment') {
          this.miVariable = 0;
        }
      }
    });
  }

  loadChalet(id: string): void {
    this.chaletsService.getChaletById(id)
      .then(chalet => {
        this.chalet = chalet;
        const imagenesKeys = Object.keys(this.chalet.imagenes);
        if (imagenesKeys.length > 0) {
          this.firstImage = this.chalet.imagenes[imagenesKeys[0]];
        }
        this.loading = false;
      })
      .catch(error => {
        this.error = 'Error al cargar el chalet';
        this.loading = false;
      });
  }

  fetchTarifas(): void {
    if (this.fecha_inicio && this.chalet) {
      const idChalet = this.chalet.id_chalet;
      this.tarifaService.getTarifasPorFecha(idChalet, this.fecha_inicio)
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
        fecha_fin: this.fecha_fin,
        tarifaSeleccionada: this.tarifaSeleccionada,
        precioTotal: this.precioTotal
      };
  
      const tipoReserva = 'chalet';
  
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
  
          this.reservesService.enviarReserva(reservaData).subscribe(
            response => {
              this.isLoading = false;
              console.log('Reserva creada exitosamente:', response);
              this.openAlert();
              setTimeout(() => {
                this.closeAlert(); 
              }, 2000);
            },
            error => {
              this.isLoading = false;
              console.error('Error al crear la reserva:', error);
              this.openErrorAlert(); 
              setTimeout(() => {
                this.closeErrorAlert();
              }, 2000);
            }
          );
        },
        (error) => {
          this.isLoading = false;
          console.error('Error al crear la orden de pago:', error);
          this.openErrorAlert();
          setTimeout(() => {
            this.closeErrorAlert(); // Redirigir al home después de 2 segundos
          }, 2000);
        }
      );
    } else {
      console.log('Formulario inválido o tarifa no seleccionada');
      this.openErrorAlert();
      setTimeout(() => {
        this.closeErrorAlert();
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
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    if (this.fecha_inicio && this.fecha_fin && this.tarifaSeleccionada) {
      const startDate = new Date(this.fecha_inicio);
      const endDate = new Date(this.fecha_fin);
      const timeDiff = endDate.getTime() - startDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;

      const pricePerDay = this.tarifaSeleccionada.precio || 0;
      const totalPrice = daysDiff * pricePerDay;

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

  checkOutDateValidator(control: AbstractControl): ValidationErrors | null {
    const checkinDate = this.reservaForm?.get('checkin')?.value;
    const checkoutDate = control.value;
    console.log(`Validando fecha de fin: ${checkoutDate} con fecha de inicio ${checkinDate}`);

    if (checkinDate && checkoutDate) {
      const checkin = new Date(checkinDate);
      const checkout = new Date(checkoutDate);

      if (checkout <= checkin) {
        console.log('La fecha de fin no es posterior a la fecha de inicio');
        return { dateInFutureError: true };
      }

      if (this.isDateInOccupiedRange(checkout)) {
        console.log('La fecha de fin está ocupada');
        return { checkoutDateError: 'La fecha de fin seleccionada está ocupada.' };
      }

      // Verificar si la fecha de fin está dentro de las fechas intermedias
      if (this.isDateInIntermediateRange(checkout)) {
        console.log('La fecha de fin está dentro de un rango ocupado');
        return { dateOccupiedError: true };
      }
    }

    return null;
  }

  checkInDateValidator(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    console.log(`Validando fecha de inicio: ${selectedDate} contra hoy ${today}`);

    // Verificar si la fecha de inicio es anterior a hoy
    if (selectedDate < today) {
      console.log('La fecha de inicio es anterior a hoy');
      return { dateInPastError: true };
    }

    // Verificar si la fecha está ocupada
    if (this.isDateInOccupiedRange(selectedDate)) {
      console.log('La fecha de inicio está ocupada');
      return { checkInDateError: 'La fecha de inicio seleccionada está ocupada.' };
    }

    // Verificar si la fecha está dentro de las fechas intermedias
    if (this.isDateInIntermediateRange(selectedDate)) {
      console.log('La fecha de inicio está dentro de un rango ocupado');
      return { dateOccupiedError: true };
    }

    return null;
  }

  
  
  isDateOccupied(selectedDate: Date): boolean {
    return this.occupiedDates.some((occupiedDate: OccupiedDate | string | Date) => {
      let startDate: Date;
      let endDate: Date;

      if (typeof occupiedDate === 'object' && 'fecha_inicio' in occupiedDate && 'fecha_fin' in occupiedDate) {
        
        startDate = new Date((occupiedDate as OccupiedDate).fechaInicio);
        endDate = new Date((occupiedDate as OccupiedDate).fechaFin);
      } else if (typeof occupiedDate === 'string') {
        const dateObj = new Date(occupiedDate);
        startDate = dateObj;
        endDate = dateObj;
      } else if (occupiedDate instanceof Date) {

        startDate = occupiedDate;
        endDate = occupiedDate;
      } else {
        console.error('El formato de la fecha ocupada es inválido:', occupiedDate);
        return false;
      }
  
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        console.error('Fechas ocupadas no válidas:', startDate, endDate);
        return false;
      }
  
      // Comparar si la selectedDate está dentro del rango de startDate y endDate
      return selectedDate >= startDate && selectedDate <= endDate;
    });
  }

  fetchOccupiedDates(idChalet: number): void {
    console.log(`Obteniendo fechas ocupadas para el chalet ${idChalet}`);
    this.reservesService.getFechasOcupadasChalet(idChalet)
      .then(dates => {
        this.occupiedDates = dates;
        console.log('Fechas ocupadas obtenidas:', this.occupiedDates);
  
        this.intermediateDates = [];
        this.occupiedDates.forEach((occupiedDate: OccupiedDate | string | Date) => {
          let startDate: Date;
          let endDate: Date;
  
          if (typeof occupiedDate === 'object' && 'fechaInicio' in occupiedDate && 'fechaFin' in occupiedDate) {
            startDate = new Date((occupiedDate as OccupiedDate).fechaInicio);
            endDate = new Date((occupiedDate as OccupiedDate).fechaFin);
            if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
              console.error('Fechas ocupadas no válidas:', startDate, endDate);
              return; // O manejar el error de manera apropiada
            }
            console.log(`Fecha ocupada de objeto: ${startDate.toISOString()} a ${endDate.toISOString()}`);
            this.intermediateDates.push(...this.calculateIntermediateDates(startDate, endDate));
          } else if (typeof occupiedDate === 'string') {
            const dateObj = new Date(occupiedDate);
            if (isNaN(dateObj.getTime())) {
              console.error('La cadena proporcionada no es una fecha válida:', occupiedDate);
              return; // O manejar el error de manera apropiada
            }
            console.log(`Fecha ocupada como string convertida a Date: ${dateObj.toISOString()}`);
            this.intermediateDates.push(dateObj);
          } else if (occupiedDate instanceof Date) {
            if (isNaN(occupiedDate.getTime())) {
              console.error('Fecha ocupada no válida:', occupiedDate);
              return; // O manejar el error de manera apropiada
            }
            console.log(`Fecha ocupada como Date: ${occupiedDate.toISOString()}`);
            this.intermediateDates.push(occupiedDate);
          } else {
            console.error('El formato de la fecha ocupada es inválido:', occupiedDate);
          }
        });
  
      })
      .catch(error => {
        console.error('Error al obtener fechas ocupadas', error);
        this.error = 'Error al obtener fechas ocupadas';
      });
  }

  calculateIntermediateDates(startDate: Date, endDate: Date): Date[] {
    console.log(`Calculando fechas intermedias entre ${startDate} y ${endDate}`);
    const dates: Date[] = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    console.log(`Fechas intermedias calculadas: ${dates}`);
    return dates;
  }

  isDateInOccupiedRange(date: Date): boolean {
    console.log(`Verificando si ${date} está en fechas ocupadas`);
    return this.occupiedDates.some((occupiedDate: OccupiedDate | string | Date) => {
      let startDate: Date;
      let endDate: Date;

      if (typeof occupiedDate === 'object' && 'fecha_inicio' in occupiedDate && 'fecha_fin' in occupiedDate) {
        startDate = new Date((occupiedDate as OccupiedDate).fechaInicio);
        endDate = new Date((occupiedDate as OccupiedDate).fechaFin);
        console.log(`Fechas ocupadas encontradas: ${startDate} a ${endDate}`);
      } else if (typeof occupiedDate === 'string') {
        const dateObj = new Date(occupiedDate);
        startDate = dateObj;
        endDate = dateObj;
        console.log(`Fecha ocupada como string convertida a Date: ${startDate}`);
      } else if (occupiedDate instanceof Date) {
        startDate = occupiedDate;
        endDate = occupiedDate;
        console.log(`Fecha ocupada como Date: ${startDate}`);
      } else {
        console.error('El formato de la fecha ocupada es inválido:', occupiedDate);
        return false;
      }

      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        console.error('Fechas ocupadas no válidas:', startDate, endDate);
        return false;
      }

      // Evaluar si la fecha está dentro del rango
      return date >= startDate && date <= endDate;
    });
  }

  isDateInIntermediateRange(date: Date): boolean {
    console.log(`Verificando si ${date} está en fechas intermedias`);
    return this.intermediateDates.some((intermediateDate: Date) => {
      const isInRange = date.getTime() === intermediateDate.getTime();
      console.log(`Comparando con ${intermediateDate}: ${isInRange}`);
      return isInRange;
    });
  }
}