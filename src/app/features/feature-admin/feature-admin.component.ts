import { Component } from '@angular/core';
import { AuthService } from '../feature-login/services/auth.service';

@Component({
  selector: 'app-feature-admin',
  templateUrl: './feature-admin.component.html',
  styleUrl: './feature-admin.component.scss'
})
export class FeatureAdminComponent {
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
