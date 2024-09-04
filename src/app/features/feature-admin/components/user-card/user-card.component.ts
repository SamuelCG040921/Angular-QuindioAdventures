// user-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';
import { AdminService } from '../../../feature-admin/services/admin.service'; // Asegúrate de importar AdminService
import { UserProfile } from '../../../feature-profile/models/user-profile';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user = {
    name: "",
    image: "",
    email: ""
  };
  @Output() imageUrlUpdated = new EventEmitter<string>();

  users: any;
  isWarningAlertOpen = false;
  isWarningAlertOpen2 = false;
  isUpdateSuccessAlertOpen = false;
  isUpdateSuccessAlertOpen2 = false;
  isErrorAlertOpen = false;

  constructor(
    public authService: AuthService,
    private adminService: AdminService // Inyecta AdminService
  ) {}

  ngOnInit() {
    this.authService.getUsersConnection().then(
      (data: UserProfile[]) => {
        console.log('Datos del usuario:', data);
        this.users = data;
      },
      err => console.error(err)
    );
  }

  async activarUsuario(): Promise<void> {
    try {
      console.log(this.user.email, 234);
      await this.adminService.activarUsuario(this.user.email);
      console.log('Usuario activado con éxito');
      this.openUpdateSuccessAlert()
    } catch (error) {
      console.error('Error al activar el usuario:', error);
      this.openErrorAlert()
    }
  }

  async desactivarUsuario(): Promise<void> {
    try {
      console.log(this.user.email, 234);
      await this.adminService.desactivarUsuario(this.user.email);
      console.log('Usuario desactivado con éxito');
      this.openUpdateSuccessAlert2()
    } catch (error) {
      console.error('Error al desactivar el usuario:', error);
      this.openErrorAlert()
    }
  }

  openWarningAlert(): void {
    this.isWarningAlertOpen = true;
  }

  closeWarningAlert(): void {
    this.isWarningAlertOpen = false;
  }

  openWarningAlert2(): void {
    this.isWarningAlertOpen2 = true;
  }

  closeWarningAlert2(): void {
    this.isWarningAlertOpen2 = false;
  }

  onConfirmModal() {
    this.activarUsuario()
  }

  onConfirmModal2() {
    this.desactivarUsuario()
  }

  openUpdateSuccessAlert(): void {
    this.isUpdateSuccessAlertOpen = true;
  }

  closeUpdateSuccessAlert(): void {
    this.isUpdateSuccessAlertOpen = false;
  }
  openUpdateSuccessAlert2(): void {
    this.isUpdateSuccessAlertOpen2 = true;
  }

  closeUpdateSuccessAlert2(): void {
    this.isUpdateSuccessAlertOpen2 = false;
  }

  openErrorAlert(): void {
    this.isErrorAlertOpen = true;
  }

  closeErrorAlert(): void {
    this.isErrorAlertOpen = false;
  }
}
