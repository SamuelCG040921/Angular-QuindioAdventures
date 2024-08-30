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
    } catch (error) {
      console.error('Error al activar el usuario:', error);
    }
  }

  async desactivarUsuario(): Promise<void> {
    try {
      console.log(this.user.email, 234);
      await this.adminService.desactivarUsuario(this.user.email);
      console.log('Usuario desactivado con éxito');
    } catch (error) {
      console.error('Error al desactivar el usuario:', error);
    }
  }
}
