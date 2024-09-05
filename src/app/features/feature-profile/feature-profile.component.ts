import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthService } from '../feature-login/services/auth.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UpdateProfile } from './models/update-profile';
import { UpdateService } from './services/update-profile.service';
import { UserProfile } from './models/user-profile';
import { ChangePasswordService } from './services/changepassword.service';
import { ProfileWelcomeEditComponent } from './components/profile-welcome-edit/profile-welcome-edit.component';

@Component({
  selector: 'app-feature-profile',
  templateUrl: './feature-profile.component.html',
  styleUrls: ['./feature-profile.component.scss']
})
export class FeatureProfileComponent implements OnInit, AfterViewInit {
  user!: UserProfile;
  button1Visible: boolean = true;
  button2y3Visible: boolean = false;
  updateForm!: FormGroup;
  isSendingEmail: boolean = false;
  isAlertOpen = false;
  isErrorAlertOpen = false;
  isErrorAlertOpen2 = false;
  isWarningAlertOpen = false;
  isUpdateSuccessAlertOpen = false;
  isLoading: boolean = false

  @ViewChild(ProfileWelcomeEditComponent) profileWelcomeEditComponent!: ProfileWelcomeEditComponent;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    public updateService: UpdateService,
    private changeService: ChangePasswordService
  ) {}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      image: ['']
    });
  
    this.updateForm.disable();
  
    this.authService.getUserProfile().then(
      (data: UserProfile) => {
        console.log('Datos del usuario:', data);
        this.user = data;
        this.updateForm.patchValue({
          name: this.user.name,
          document: this.user.document,
          lastName: this.user.lastName,
          age: this.user.age,
          phoneNumber: this.user.phoneNumber,
          address: this.user.address,
          email: this.user.email,
          image: this.user.image
        });
      },
      err => this.openErrorAlert2()
      
    );
  }

  ngAfterViewInit(): void {
    if (this.profileWelcomeEditComponent) {
      this.profileWelcomeEditComponent.imageUrlUpdated.subscribe((imageUrl: string) => {
        console.log('Received image URL:', imageUrl);
        this.updateForm.patchValue({ image: imageUrl });
      });
    }
  }

  onSubmit() {
    if (this.updateForm.valid) {
      this.isLoading = true
      const updateData = new UpdateProfile(
        this.updateForm.value.name,
        this.updateForm.value.document,
        this.updateForm.value.lastName,
        this.updateForm.value.age,
        this.updateForm.value.phoneNumber,
        this.updateForm.value.address,
        this.updateForm.value.email,
        this.updateForm.value.image
      );

      console.log('Update Data:', updateData);
      
      this.updateService.updateUserProfile(updateData).then(
        response => {
          this.isLoading = false
          console.log('Actualización exitosa:', response);
          this.openUpdateSuccessAlert();
          setTimeout(() => {
            window.location.reload();
          }, 1300);
        }
      ).catch(
        error => {
          this.isLoading = false
          console.error('Error de actualización:', error);
          this.openErrorAlert();
        }
      );
    } else {
      console.error('Formulario no es válido');
      this.openErrorAlert();
      this.updateForm.markAllAsTouched();
    }
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
    this.updateForm.patchValue(this.user);
  }

  isFieldInvalid(field: string): boolean {
    const control = this.updateForm.get(field);
    return control ? !control.valid && (control.dirty || control.touched) : false;
  }

  getErrorMessage(field: string): string {
    const control = this.updateForm.get(field);
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio';
    } else if (control?.hasError('min')) {
      return 'La edad debe ser mayor a 0';
    } else if (control?.hasError('pattern')) {
      return 'El teléfono debe tener 10 dígitos';
    } else if (control?.hasError('email')) {
      return 'Correo no válido';
    }
    return '';
  }

  enviarCorreo() {
    if (this.isSendingEmail) return;
    this.isSendingEmail = true;
    
    this.changeService.solicitarRestablecimientoAutenticado().then(
      response => {
        console.log('Envío exitoso:', response);
        this.isSendingEmail = false;
        this.openAlert();
      }
    ).catch(
      error => {
        console.error('Error:', error);
        this.isSendingEmail = false;
        this.openErrorAlert();
      }
    );
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

  openWarningAlert(): void {
    this.isWarningAlertOpen = true;
  }

  closeWarningAlert(): void {
    this.isWarningAlertOpen = false;
  }

  openUpdateSuccessAlert(): void {
    this.isUpdateSuccessAlertOpen = true;
  }

  closeUpdateSuccessAlert(): void {
    this.isUpdateSuccessAlertOpen = false;
  }

  onConfirmModal() {
    this.onSubmit();
  }
}
