import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Change } from '../../../../features/feature-login/models/change';
import { ChangePasswordService } from '../../../../features/feature-profile/services/changepassword.service';

@Component({
  selector: 'app-modal-email',
  templateUrl: './modal-email.component.html',
  styleUrls: ['./modal-email.component.scss']  // Corregido de `styleUrl` a `styleUrls`
})
export class ModalEmailComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  emailForm!: FormGroup;
  isSubmitting: boolean = false;
  isAlertOpen = false;
  isErrorAlertOpen = false;

  constructor(private fb: FormBuilder, private changeService: ChangePasswordService) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  closeModal(): void {
    this.close.emit();
  }

  onSubmit(): void {
    if (this.emailForm.valid) {
      this.isSubmitting = true; // Deshabilitar el botón al enviar

      const changeData = new Change(
        this.emailForm.value.email,
      );

      this.changeService.solicitarRestablecimiento(changeData).then(
        response => {
          this.isSubmitting = false; // Habilitar el botón después de la respuesta
          console.log('Envio exitoso:', response);
          this.openAlert();
        }
      ).catch(
        error => {
          this.isSubmitting = false; // Habilitar el botón después de un error
          console.error('Error:', error);
          this.openErrorAlert();
        }
      );
    } else {
      console.error('Form is not valid');
      this.openErrorAlert();
      this.emailForm.markAllAsTouched(); // Marcar todos los campos como tocados para mostrar errores
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
    const control = this.emailForm.get(field);
    return control ? !control.valid && (control.dirty || control.touched) : false;
  }
}
