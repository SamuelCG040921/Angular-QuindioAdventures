import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Auth } from './models/auth.model';

@Component({
  selector: 'app-feature-login',
  templateUrl: './feature-login.component.html',
  styleUrl: './feature-login.component.scss'
})
export class FeatureLoginComponent {
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

      const newAuth = new Auth(
        this.loginForm.value.email,
        this.loginForm.value.password
      );

      this.authService.register(newAuth).then(
        response => {
          this.isSubmitting = false; // Habilitar el botón después de la respuesta
          // Manejar la respuesta exitosa aquí
        }
      ).catch(
        error => {
          this.isSubmitting = false; // Habilitar el botón después de un error
          console.error('Registration error:', error);
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
