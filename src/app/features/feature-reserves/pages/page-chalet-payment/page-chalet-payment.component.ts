import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ChaletInfo } from '../../models/chaletsById';
import { ChaletsService } from '../../services/chalets.service';
import { TarifaService } from '../../services/tarifa.service';
import { CountPeopleService } from '../../services/count-people.service';
import { Subscription } from 'rxjs';
import { ReservesService } from '../../services/reserves.service';

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
  checkoutDateError: boolean = false;
  isLoading: boolean = false;// Nueva variable para el precio total

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
      checkin: ['', Validators.required],
      checkout: ['', [Validators.required, this.checkCheckoutDate.bind(this)]] // Apply custom validation here
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
      } else {
        this.error = 'ID del chalet no disponible';
        this.loading = false;
      }
    });

    this.reservaForm.get('checkin')?.valueChanges.subscribe(value => {
      this.fecha_inicio = value;
      this.fetchTarifas(); // Obtener tarifas basadas en la fecha de inicio
    });

    this.reservaForm.get('checkout')?.valueChanges.subscribe(value => {
      this.fecha_fin = value;
      this.calculateTotalPrice(); // Calcular el precio total cuando se cambie la fecha de fin
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
  
      // Asegúrate de establecer el tipo de reserva aquí: 'chalet' o 'plan'
      const tipoReserva = 'chalet'; // O 'plan' según el contexto
  
      this.reservesService.createOrder(formData.precioTotal, tipoReserva).subscribe(
        (orderResponse) => {
          console.log('Orden creada exitosamente:', orderResponse);
  
          const reservaData = {
            ...formData,
            orderId: orderResponse.id // Usa la ID de la orden generada
          };

          if (orderResponse.sandbox_init_point) {
            window.location.href = orderResponse.sandbox_init_point;
          }
  
          this.reservesService.enviarReserva(reservaData).subscribe(
            response => {
              this.isLoading = false;
              console.log('Reserva creada exitosamente:', response);
              this.openAlert(); // Muestra la alerta de éxito
            },
            error => {
              this.isLoading = false;
              console.error('Error al crear la reserva:', error);
              this.openErrorAlert(); // Muestra la alerta de error
            }
          );
        },
        (error) => {
          this.isLoading = false;
          console.error('Error al crear la orden de pago:', error);
          this.openErrorAlert(); // Muestra la alerta de error
        }
      );
    } else {
      console.log('Formulario inválido o tarifa no seleccionada');
      this.openErrorAlert();
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
    // Formatea el precio a una cadena con separadores de miles y sin decimales
    return price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
  }

  checkCheckoutDate(control: any): { [key: string]: boolean } | null {
    const checkInDate = new Date(this.reservaForm?.get('checkin')?.value);
    if (control.value && checkInDate) {
      const checkoutDate = new Date(control.value);
      if (checkoutDate <= checkInDate) {
        this.checkoutDateError = true; // Set the property to true when validation fails
        return { checkoutDateError: true };
      }
    }
    this.checkoutDateError = false; // Reset the property when validation passes
    return null;
  }
}