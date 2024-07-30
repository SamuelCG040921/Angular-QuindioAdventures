import { Component } from '@angular/core';
import { UserService } from '../../../feature-reserves/services/user.service';
import { AuthService } from '../../../feature-login/services/auth.service';

@Component({
  selector: 'app-profile-welcome',
  templateUrl: './profile-welcome.component.html',
  styleUrl: './profile-welcome.component.scss'
})
export class ProfileWelcomeComponent {
  user: any;
  isInputDisabled = true;

  habilitarInput() {
    this.isInputDisabled = false;
  }

  constructor(private userService: UserService, public authService: AuthService) {}

  ngOnInit() {
    this.userService.getUserbyID() // Llamar al método del servicio
      .subscribe((data: any) => {
        this.user = data; // Almacenar el usuario activo
      });
  }
}
