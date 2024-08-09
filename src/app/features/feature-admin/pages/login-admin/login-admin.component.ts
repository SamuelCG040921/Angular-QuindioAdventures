import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../feature-login/models/auth.model';
import { AuthService } from '../../../feature-login/services/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.scss'
})
export class LoginAdminComponent {
  loginAdminForm!: FormGroup;
  isSubmitting: boolean = false;
  user:any

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {}

  ngOnInit() : void {
    this.loginAdminForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
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
          // Manejar la respuesta exitosa aquí (p.ej., redirigir al usuario)
        }
      ).catch(
        error => {
          this.isSubmitting = false; // Habilitar el botón después de un error
          console.error('Login error:', error);
        }
      );
      this.router.navigate(['']);

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

  
  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
