import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthService } from '../feature-login/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  isWarningAlertOpen = false;
  isUpdateSuccessAlertOpen = false;

  @ViewChild(ProfileWelcomeEditComponent) profileWelcomeEditComponent!: ProfileWelcomeEditComponent;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    public updateService: UpdateService,
    private changeService: ChangePasswordService
  ) {}

  ngOnInit(): void {
    // Inicializa el formulario con valores predeterminados
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      image: [''] 
    });
  
    // Desactiva el formulario al inicio
    this.updateForm.disable();
  
    // Obtén el perfil del usuario
    this.authService.getUserProfile().then(
      (data: UserProfile) => {
        console.log('Datos del usuario:', data); // Verifica los datos del usuario
        this.user = data;
  
        // Actualiza los valores del formulario con los datos del usuario
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
      err => console.error(err)
    );
  }

  ngAfterViewInit(): void {
    if (this.profileWelcomeEditComponent) {
      this.profileWelcomeEditComponent.imageUrlUpdated.subscribe((imageUrl: string) => {
        console.log('Received image URL:', imageUrl); // Verifica la URL recibida
        this.updateForm.patchValue({ image: imageUrl });
      });
    }
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
      this.updateForm.value.email,
      this.updateForm.value.image // Asegúrate de incluir la URL de la imagen
    );

    console.log('Update Data:', updateData); // Verifica los datos de actualización
    
    this.updateService.updateUserProfile(updateData).then(
      response => {
        console.log('Actualización exitosa:', response);
        this.openUpdateSuccessAlert();

        // Recarga la página después de la actualización exitosa
        setTimeout(() => {
          window.location.reload();
        }, 1300); // Se espera 2 segundos antes de recargar la página

      }
    ).catch(
      error => {
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

  closeErrorAlert(): void {
    this.isErrorAlertOpen = false;
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
