import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservesService } from '../../services/reserves.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-chalet-method',
  templateUrl: './page-chalet-method.component.html',
  styleUrl: './page-chalet-method.component.scss'
})
export class PageChaletMethodComponent {
  isAlertOpen = false;
  isErrorAlertOpen = false;

  reservaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reservesService: ReservesService,
    private router: Router
  ) {
    this.reservaForm = this.fb.group({
      documento: ['', Validators.required],
      cantidadNinos: ['', Validators.required],
      tipo: 'Chalet',
      codigo: 39,
      numero: 7,
      precio: 6000000,
      cantidadAdultos: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      checkin: ['', Validators.required],
      checkout: ['', Validators.required],
      estado: "Activa"
    });
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

  onSubmit(): void {
    if (this.reservaForm.valid) {
      const reserva = this.reservaForm.value;
      this.reservesService.createReservation(reserva).subscribe(
        res => {
          console.log('Reserva creada correctamente:', res);
          this.router.navigate(['/reserves']);
          this.openAlert();
        },
        error => {
          console.error('Error al crear la reserva:', error);
        }
      );
    } else {
      console.error('Formulario no es válido');
      this.openErrorAlert();
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.reservaForm.get(field);
    return control ? !control.valid && (control.dirty || control.touched) : false;
  }
}


