import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../feature-login/models/auth.model';
import { AuthService } from '../../../feature-login/services/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  isAlertOpen = false;
  isErrorAlertOpen = false;
  loginAdminForm!: FormGroup;
  isSubmitting: boolean = false;
  isLoading: boolean = false;

  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginAdminForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginAdminForm.valid) {
      this.isSubmitting = true;
      this.isLoading = true;
  
      const authData = new Auth(
        this.loginAdminForm.value.email,
        this.loginAdminForm.value.password
      );
  
      this.authService.authAdmin(authData).then(
        response => {
          this.isLoading = false
          this.isSubmitting = false;
          console.log('Login exitoso:', response);

          
          this.openAlert();

          setTimeout(() => {
            this.router.navigate(['/administration-home']); // Redirigir al home después de 2 segundos
          }, 1000);
        }
        
      ).catch(
        error => {
          // Mostrar el mensaje de error de inmediato
          this.isLoading = false;
          this.isSubmitting = false;
          this.openErrorAlert(); // Abre la ventana de error de inmediato
          console.error('Login error:', error);
        }
      );
    } else {
      // Mostrar el mensaje de error de validación de formulario
      this.openErrorAlert();
      console.error('Form is not valid');
      this.loginAdminForm.markAllAsTouched();
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.loginAdminForm.get(field);
    return control ? !control.valid && (control.dirty || control.touched) : false;
  }

  getErrorMessage(controlName: string): string {
    const control = this.loginAdminForm.get(controlName);

    if (!control) {
      return 'Error inesperado';
    }

    if (control.hasError('required')) {
      return 'Este campo es obligatorio';
    } else if (control.hasError('pattern')) {
      return 'Por favor, ingresa un correo electrónico válido';
    } else if (control.hasError('minlength')) {
      return 'La contraseña debe tener al menos 8 caracteres';
    }

    return '';
  }

  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
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
}
