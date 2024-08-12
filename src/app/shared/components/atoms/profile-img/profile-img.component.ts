import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../../features/feature-reserves/services/user.service';
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

    constructor(private userService: UserService, private authService: AuthService) {}

    ngOnInit() {
      this.authService.getUserProfile().then(
        data => this.user = data,
        err => console.error(err)
      );
    }
}