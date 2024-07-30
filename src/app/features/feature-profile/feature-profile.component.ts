import { Component, OnInit } from '@angular/core';
import { AuthService } from '../feature-login/services/auth.service';
import { User } from '../feature-register/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateProfile } from './models/update-profile';
import { UpdateService } from './services/update-profile.service';

@Component({
  selector: 'app-feature-profile',
  templateUrl: './feature-profile.component.html',
  styleUrls: ['./feature-profile.component.scss']
})
export class FeatureProfileComponent implements OnInit {
  user: any;
  button1Visible = true;
  button2y3Visible = false;
  updateForm!: FormGroup;

  constructor(public authService: AuthService, private fb: FormBuilder, public updateService: UpdateService) {}

  ngOnInit(): void {
    this.authService.getUserProfile().then(
      (data: User) => {
        this.user = data;
        this.updateForm.patchValue(this.user);
        this.updateForm.disable();
      },
      err => console.error(err)
    );

    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      document: ['', Validators.required],
      age: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  habilitarInput() {
    Object.keys(this.updateForm.controls).forEach(field => {
      if (field !== 'document' && field !== 'email') {
        this.updateForm.get(field)?.enable();
      }
    });
    this.cambiarEstadoBotones();
  }

  cambiarEstadoBotones() {
    this.button1Visible = false;
    this.button2y3Visible = true;
  }

  cancelarBotones() {
    this.button1Visible = true;
    this.button2y3Visible = false;
    this.updateForm.disable();
    this.updateForm.patchValue(this.user);  // Reset form values to original user data
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const updateData = new UpdateProfile(
        this.updateForm.value.name,
        this.updateForm.value.document,
        this.updateForm.value.lastName,
        this.updateForm.value.age,
        this.updateForm.value.phoneNumber,
        this.updateForm.value.address,
        this.updateForm.value.email
      );

      this.updateService.update(updateData).then(
        response => {
          console.log('Actualizacion exitosa:', response);
          this.authService.getUserProfile().then(
            data => {
              this.user = data;
              this.updateForm.patchValue(this.user);
              this.updateForm.disable();
              this.button1Visible = true;
              this.button2y3Visible = false;
            },
            err => console.error(err)
          );
        }
      ).catch(
        error => {
          console.error('Update error:', error);
        }
      );
    } else {
      console.error('Form is not valid');
      this.updateForm.markAllAsTouched(); // Marcar todos los campos como tocados para mostrar errores
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.updateForm.get(field);
    return control ? !control.valid && (control.dirty || control.touched) : false;
  }
}
