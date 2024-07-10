import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from './models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-feature-register',
  templateUrl: './feature-register.component.html',
  styleUrls: ['./feature-register.component.scss']
})
export class FeatureRegisterComponent implements OnInit {
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
        }
      ).catch(
        error => {
          this.isSubmitting = false; // Habilitar el botón después de un error
          console.error('Registration error:', error);
        }
      );
    } else {
      console.error('Form is not valid');
      this.registroForm.markAllAsTouched(); // Marcar todos los campos como tocados para mostrar errores
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.registroForm.get(field);
    return control ? !control.valid && (control.dirty || control.touched) : false;
  }
}
