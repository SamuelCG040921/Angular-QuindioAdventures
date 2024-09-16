import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';
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

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.getUserProfile().then(
      data => this.user = data,
      err => console.error(err)
    );
  }

  setActiveRoute(){
    
  }
}
