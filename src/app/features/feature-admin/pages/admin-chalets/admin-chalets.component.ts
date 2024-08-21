import { Component } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';

@Component({
  selector: 'app-admin-chalets',
  templateUrl: './admin-chalets.component.html',
  styleUrl: './admin-chalets.component.scss'
})
export class AdminChaletsComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
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
