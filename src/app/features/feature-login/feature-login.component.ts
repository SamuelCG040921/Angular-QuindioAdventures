import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Auth } from './models/auth.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feature-login',
  templateUrl: './feature-login.component.html',
  styleUrls: ['./feature-login.component.scss']
})
export class FeatureLoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitting: boolean = false;
  user:any
  isAlertOpen = false;
  isErrorAlertOpen = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {}

  ngOnInit() : void {
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

      this.authService.auth(authData).then(
        response => {
          this.isSubmitting = false; // Habilitar el botón después de la respuesta
          console.log('Login exitoso:', response);
          // Manejar la respuesta exitosa aquí (p.ej., redirigir al usuario)
          this.openAlert();

          setTimeout(() => {
            this.router.navigate(['']); // Redirigir al home después de 2 segundos
          }, 2000);
        }
        
      ).catch(
        error => {
          this.isSubmitting = false; // Habilitar el botón después de un error
          console.error('Login error:', error);
          this.openErrorAlert();
        }
      );
      

      this.authService.getUserProfile().then(
        data => this.user = data,
        err => console.error(err)
      );
      
    } else {
      console.error('Form is not valid');
      this.openErrorAlert();
      this.loginForm.markAllAsTouched(); // Marcar todos los campos como tocados para mostrar errores
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.loginForm.get(field);
    return control ? !control.valid && (control.dirty || control.touched) : false;
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