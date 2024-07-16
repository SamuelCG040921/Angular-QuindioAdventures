import { Component, Input } from '@angular/core';
import { User } from '../../../feature-register/models/user.model';
import { UserService } from '../../../feature-reserves/services/user.service';

@Component({
  selector: 'app-profile-aside',
  templateUrl: './profile-aside.component.html',
  styleUrl: './profile-aside.component.scss'
})
export class ProfileAsideComponent {
  user:any
  colorFondo: string = '#FFFF'

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserbyID() // Llamar al método del servicio
    .subscribe((data: any) => {
      this.user = data; // Almacenar el usuario activo
    });
  }

  cambiarColorFondo(){
    this.colorFondo = '#D1E1D8';
  }
  }

