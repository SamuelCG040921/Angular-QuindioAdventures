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
  registroForm!: FormGroup;
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, private changePasswordServices: ChangePasswordService) {}

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
    const control = this.registroForm.get(field);
    return control ? !control.valid && (control.dirty || control.touched) : false;
  }
}
