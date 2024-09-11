import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { User } from './models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-register',
  templateUrl: './feature-register.component.html',
  styleUrls: ['./feature-register.component.scss']
})
export class FeatureRegisterComponent implements OnInit {
  isAlertOpen = false;
  isErrorAlertOpen = false;
  isErrorAlertOpen2 = false;
  registroForm!: FormGroup;
  isSubmitting: boolean = false;
  img = 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg';
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private registerService: RegisterService,  private router:Router) {}

  matchPasswordValidator(control: FormGroup): { [key: string]: boolean } | null {
    if (this.registroForm) {
        return control.value === this.registroForm.get('password')?.value ? null : { 'mismatch': true };
    }
    return null;
}


  ngOnInit() {
    this.registroForm = this.fb.group({
      document: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      confirmPassword: ['', [Validators.required, this.matchPasswordValidator.bind(this)]],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
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

  openErrorAlert2(): void {
    this.isErrorAlertOpen2 = true;
  }

  closeErrorAlert(): void {
    this.isErrorAlertOpen = false;
  }

  closeErrorAlert2(): void {
    this.isErrorAlertOpen2 = false;
  }

  onSubmit() {
    if (this.registroForm.valid) {
      this.isSubmitting = true;
      this.isLoading = true; // Deshabilitar el botón al enviar

      const newUser = new User(
        this.registroForm.value.name,
        this.registroForm.value.age,
        this.registroForm.value.address,
        this.registroForm.value.lastName,
        this.registroForm.value.phoneNumber,
        this.registroForm.value.document,
        this.registroForm.value.email,
        this.registroForm.value.password,
        this.img
      );

      this.registerService.register(newUser).then(
        response => {
          this.isSubmitting = false; // Habilitar el botón después de la respuesta
          // Manejar la respuesta exitosa aquí
          this.openAlert();
          console.log(response);

          setTimeout(() => {
            this.router.navigate(['/login']); // Redirigir al home después de 2 segundos
          }, 2000);
          
          this.isLoading = false
        }
      ).catch(
        error => {
          this.isSubmitting = false;
          this.isLoading = false // Habilitar el botón después de un error
          console.error('Registration error:', error);
          this.openErrorAlert2();
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
