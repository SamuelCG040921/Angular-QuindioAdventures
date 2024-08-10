import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Change } from '../../../../features/feature-login/models/change';
import { ChangePasswordService } from '../../../../features/feature-profile/services/changepassword.service';

@Component({
  selector: 'app-modal-email',
  templateUrl: './modal-email.component.html',
  styleUrl: './modal-email.component.scss'
})
export class ModalEmailComponent {
  @Output() close = new EventEmitter<void>();
  emailForm!: FormGroup;
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, private changeService: ChangePasswordService) {}

  closeModal(): void {
    this.close.emit();
  }

  ngOnInit() : void {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.emailForm.valid) {
      this.isSubmitting = true; // Deshabilitar el botón al enviar

      const changeData = new Change(
        this.emailForm.value.email,
      );

      this.changeService.solicitarRestablecimiento(changeData).then(
        response => {
          this.isSubmitting = false; // Habilitar el botón después de la respuesta
          console.log('Envio exitoso:', response);
          // Manejar la respuesta exitosa aquí (p.ej., redirigir al usuario)
        }
      ).catch(
        error => {
          this.isSubmitting = false; // Habilitar el botón después de un error
          console.error('Error:', error);
        }
      );

      
    } else {
      console.error('Form is not valid');
      this.emailForm.markAllAsTouched(); // Marcar todos los campos como tocados para mostrar errores
    }
  }

}
