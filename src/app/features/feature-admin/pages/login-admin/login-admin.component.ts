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
  loginAdminForm!: FormGroup;
  isSubmitting: boolean = false;
  user: any;

  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginAdminForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginAdminForm.valid) {
      this.isSubmitting = true; // Deshabilitar el botón al enviar
  
      const authData = new Auth(
        this.loginAdminForm.value.email,
        this.loginAdminForm.value.password
      );
  
      this.authService.auth(authData).then(
        response => {
          this.isSubmitting = false; // Habilitar el botón después de la respuesta
          console.log('Login exitoso:', response);
  
          // Redirigir al usuario al panel de administración después de un pequeño retraso
          setTimeout(() => {
            this.router.navigate(['/adminHome']); // Redirige a la ruta 'inicio'
          }, 2000);
        }
      ).catch(
        error => {
          this.isSubmitting = false; // Habilitar el botón después de un error
          console.error('Login error:', error);
        }
      );
  
      this.authService.getUserProfile().then(
        data => this.user = data,
        err => console.error(err)
      );
    } else {
      console.error('Form is not valid');
      this.loginAdminForm.markAllAsTouched(); // Marcar todos los campos como tocados para mostrar errores
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
}
