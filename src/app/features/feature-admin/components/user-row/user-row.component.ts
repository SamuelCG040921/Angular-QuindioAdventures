import { Component } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrl: './user-row.component.scss'
})
export class UserRowComponent {
  user: any;

  constructor(public authService: AuthService) {}
  ngOnInit() {
    // Cargar el perfil del usuario actual
    this.authService.getUserProfile().then(
      data => {
        this.user = data;
      },
      err => console.error(err)
    );

    // Llamada al servicio para cargar la lista de usuarios (puedes reemplazar esto con el servicio adecuado)
  }
}
