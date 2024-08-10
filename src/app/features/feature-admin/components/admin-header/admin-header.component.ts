import { Component } from '@angular/core';
import { UserService } from '../../../feature-reserves/services/user.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss'
})
export class AdminHeaderComponent {
  user:any

    constructor(private userService: UserService) {}

    ngOnInit() {
      this.userService.getUserbyID() // Llamar al método del servicio
      .subscribe((data: any) => {
        this.user = data; // Almacenar el usuario activo
      });
  }
}
