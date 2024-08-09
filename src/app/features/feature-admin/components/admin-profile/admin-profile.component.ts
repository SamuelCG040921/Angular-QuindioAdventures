import { Component } from '@angular/core';
import { UserService } from '../../../feature-reserves/services/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss'
})
export class AdminProfileComponent {
  user:any

    constructor(private userService: UserService) {}

    ngOnInit() {
      this.userService.getUserbyID() // Llamar al método del servicio
      .subscribe((data: any) => {
        this.user = data; // Almacenar el usuario activo
      });
  }
}
