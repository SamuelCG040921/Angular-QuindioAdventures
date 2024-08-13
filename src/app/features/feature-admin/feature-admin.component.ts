import { Component, OnInit } from '@angular/core';
import { AuthService } from '../feature-login/services/auth.service';

@Component({
  selector: 'app-feature-admin',
  templateUrl: './feature-admin.component.html',
  styleUrls: ['./feature-admin.component.scss'] // Nota: el nombre de la propiedad es `styleUrls`, no `styleUrl`
})
export class FeatureAdminComponent implements OnInit {
  user: any;
  users: any[] = []; // Añadimos la propiedad `users` para almacenar la lista de usuarios
  isInputDisabled = true;
  

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

  habilitarInput() {
    this.isInputDisabled = false;
  }
}
