import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Auth } from './models/auth.model';

@Component({
  selector: 'app-feature-login',
  templateUrl: './feature-login.component.html',
  styleUrls: ['./feature-login.component.scss']
})
export class FeatureLoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isSubmitting = true; // Deshabilitar el botón al enviar

      const authData = new Auth(
        this.loginForm.value.email,
        this.loginForm.value.password
      );

      this.authService.register(authData).then(
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
    } else {
      console.error('Form is not valid');
      this.loginForm.markAllAsTouched(); // Marcar todos los campos como tocados para mostrar errores
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.loginForm.get(field);
    return control ? !control.valid && (control.dirty || control.touched) : false;
  }
}
