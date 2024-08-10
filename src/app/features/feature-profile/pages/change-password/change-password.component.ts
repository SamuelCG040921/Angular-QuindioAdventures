import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangePasswordService } from '../../services/changepassword.service';
import { ChangePassword } from '../../models/change-password.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent implements OnInit {
  isAlertOpen = false;
  isErrorAlertOpen = false;
  changeForm!: FormGroup;
  isSubmitting: boolean = false;
  token!: string | null;

  constructor(
    private fb: FormBuilder,
    private changePasswordService: ChangePasswordService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtiene el token desde la URL
    this.token = this.route.snapshot.queryParamMap.get('token');

    this.changeForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });

    if (!this.token) {
      // Si no hay token, redirige o muestra un mensaje de error
      console.error('Token no proporcionado');
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

  isFieldInvalid(field: string): boolean {
    const control = this.changeForm.get(field);
    return control ? !control.valid && (control.dirty || control.touched) : false;
  }

  isWarningAlertOpen = false;

  closeWarningAlert(){
    this.isWarningAlertOpen = false;
  }

  openWarningAlert(){
    this.isWarningAlertOpen = true;
  }

  async onSubmit() {
    if (this.changeForm.valid && this.token) {
      const changeData = new ChangePassword(
        this.changeForm.value.password,
        this.changeForm.value.confirmPassword
      );

      try {
        const response = await this.changePasswordService.change(changeData, this.token);
        
        console.log('Cambio exitoso:', response);
        this.openAlert();
      } catch (error) {
        console.error('Cambio fallido:', error);
        this.openErrorAlert();
      }
    } else {
      console.error('Form is not valid');
      this.changeForm.markAllAsTouched();
      this.openWarningAlert();
    }
  }
}
