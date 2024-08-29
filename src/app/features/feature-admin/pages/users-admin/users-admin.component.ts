import { Component } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrl: './users-admin.component.scss'
})
export class UsersAdminComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  disguiseMenu(){
    this.isMenuOpen = false;
  }
  
  user: any;
  isInputDisabled = true;

  habilitarInput() {
    this.isInputDisabled = false;
  }

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.getUserProfile().then(
      data => this.user = data,
      err => console.error(err)
    );
  }
}
