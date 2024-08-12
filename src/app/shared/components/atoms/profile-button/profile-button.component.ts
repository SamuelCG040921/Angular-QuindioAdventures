import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../features/feature-reserves/services/user.service';
import { AuthService } from '../../../../features/feature-login/services/auth.service';
import { User } from '../../../../features/feature-register/models/user.model';
import { UserProfile } from '../../../../features/feature-profile/models/user-profile';



@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrl: './profile-button.component.scss'
})
export class ProfileButtonComponent implements OnInit {
  user:any

    constructor(private userService: UserService, private authService: AuthService) {}
    
    ngOnInit() {
      this.authService.getUserProfile().then(
        data => this.user = data,
        err => console.error(err)
      );
    }
}

