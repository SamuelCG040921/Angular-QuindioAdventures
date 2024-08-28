import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { User } from './models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-feature-register',
  templateUrl: './feature-register.component.html',
  styleUrls: ['./feature-register.component.scss']
})
export class FeatureRegisterComponent implements OnInit {
  isAlertOpen = false;
  isErrorAlertOpen = false;
  registroForm!: FormGroup;
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {}

  ngOnInit() {
    this.registroForm = this.fb.group({
      document: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      const activeElement = document.activeElement as HTMLElement;

      if (activeElement.classList.contains('name')) {
        event.preventDefault();
        (document.querySelector('.lastName') as HTMLElement).focus();
      } else if (activeElement.classList.contains('lastName')) {
        event.preventDefault();
        (document.querySelector('.email') as HTMLElement).focus();
      } else if (activeElement.classList.contains('email')) {
        event.preventDefault();
        (document.querySelector('.age') as HTMLElement).focus();
      } else if (activeElement.classList.contains('age')) {
        event.preventDefault();
        (document.querySelector('.phoneNumber') as HTMLElement).focus();
      } else if (activeElement.classList.contains('phoneNumber')) {
        event.preventDefault();
        (document.querySelector('.password') as HTMLElement).focus();
      } else if (activeElement.classList.contains('password')) {
        event.preventDefault();
        (document.querySelector('.confirmPassword') as HTMLElement).focus();
      } else if (activeElement.classList.contains('confirmPassword')) {
        event.preventDefault();
        (document.querySelector('.address') as HTMLElement).focus();
      } else if (activeElement.classList.contains('address')) {
        event.preventDefault();
        (document.querySelector('.document') as HTMLElement).focus();
      } 
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

  onSubmit() {
    if (this.registroForm.valid) {
      this.isSubmitting = true; // Deshabilitar el botón al enviar

      const newUser = new User(
        this.registroForm.value.name,
        this.registroForm.value.age,
        this.registroForm.value.address,
        this.registroForm.value.lastName,
        this.registroForm.value.phoneNumber,
        this.registroForm.value.document,
        this.registroForm.value.email,
        this.registroForm.value.password
      );

      this.registerService.register(newUser).then(
        response => {
          this.isSubmitting = false; // Habilitar el botón después de la respuesta
          // Manejar la respuesta exitosa aquí
          this.openAlert();
          console.log(response);
          
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
      this.registroForm.markAllAsTouched(); // Marcar todos los campos como tocados para mostrar errores
      this.openErrorAlert();
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.registroForm.get(field);
    return control ? !control.valid && (control.dirty || control.touched) : false;
  }
}
