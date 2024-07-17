import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangePasswordService } from '../../services/changepassword.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  isAlertOpen = false;
  isErrorAlertOpen = false;
  changeForm!: FormGroup;
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, private changePasswordServices: ChangePasswordService) {}

  ngOnInit() {
    this.changeForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
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

  isWarningAlertOpen = false

  closeWarningAlert(){
    this.isWarningAlertOpen = false
  }

  openWarningAlert(){
    this.isWarningAlertOpen = true
  }

}
