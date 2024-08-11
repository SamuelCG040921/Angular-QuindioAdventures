import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../../features/feature-reserves/services/user.service';
import { UserProfile } from '../../../../features/feature-profile/models/user-profile';
import { AuthService } from '../../../../features/feature-login/services/auth.service';

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrl: './profile-img.component.scss'
})
export class ProfileImgComponent implements OnInit {

  @Input() width = '';
  @Input() height = '';

  user:any

    constructor(private userService: UserService, private authService:AuthService) {}

    ngOnInit() {
      this.authService.getUserProfile().then(
        (data: UserProfile) => {
          this.user = data;
        },
        err => console.error(err)
      );
  }
}

