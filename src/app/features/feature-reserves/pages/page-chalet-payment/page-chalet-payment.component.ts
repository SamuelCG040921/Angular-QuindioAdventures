import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservesService } from '../../services/reserves.service';
import { Router } from '@angular/router';
import { Reserva } from '../../models/reserva.model';

@Component({
  selector: 'app-page-chalet-payment',
  templateUrl: './page-chalet-payment.component.html',
  styleUrls: ['./page-chalet-payment.component.scss']
})
export class PageChaletPaymentComponent implements OnInit{
  isSubmitting = false;
  reserves: any
  isAlertOpen = false;
  isErrorAlertOpen = false;
  reservaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reservesService: ReservesService,
    private router: Router
  ) {}

  ngOnInit(){
    this.reservaForm = this.fb.group({
      documento: ['', Validators.required],
      cantidadNinos: ['', Validators.required],
      cantidadAdultos: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.reservaForm.valid) {
      this.isSubmitting = true; // Deshabilitar el botón al enviar

      const newReserva = new Reserva(
        this.reservaForm.value.documento,
        this.reservaForm.value.cantidadAdultos,
        this.reservaForm.value.cantidadNinos,
        this.reservaForm.value.nombre,
        this.reservaForm.value.fechaFin,
        this.reservaForm.value.fechaInicio,
      );

      this.reservesService.registerReserva(newReserva).then(
        response => {
          this.isSubmitting = false; // Habilitar el botón después de la respuesta
          // Manejar la respuesta exitosa aquí
          this.openAlert();
        }
      ).catch(
        error => {
          this.isSubmitting = false; // Habilitar el botón después de un error
          console.error('Registration error:', error);
          this.openErrorAlert();
        }
      );
    } else {
      console.error('Form is not valid');
      this.reservaForm.markAllAsTouched(); // Marcar todos los campos como tocados para mostrar errores
      this.openErrorAlert();
    }
  }

  openAlert(): void {
    this.isAlertOpen = true;
  }

  closeAlert(): void {
    this.isAlertOpen = false;
  }

  openErrorAlert(): void {
    this.isErrorAlertOpen = true;
  }

  closeErrorAlert(): void {
    this.isErrorAlertOpen = false;
  }

  isFieldInvalid(field: string): boolean {
    const control = this.reservaForm.get(field);
    return control ? !control.valid && (control.dirty || control.touched) : false;
  }
}