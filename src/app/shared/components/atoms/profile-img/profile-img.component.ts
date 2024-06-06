import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../features/feature-reserves/services/user.service';

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrl: './profile-img.component.scss'
})
export class ProfileImgComponent implements OnInit {
  user:any

    constructor(private userService: UserService) {}

    ngOnInit() {
      this.userService.getUserbyID() // Llamar al método del servicio
      .subscribe((data: any) => {
        this.user = data; // Almacenar el usuario activo
      });
  }
}

