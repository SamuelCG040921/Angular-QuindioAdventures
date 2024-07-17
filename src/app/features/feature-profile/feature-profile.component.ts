import { Component } from '@angular/core';
import { UserService } from '../feature-reserves/services/user.service';

@Component({
  selector: 'app-feature-profile',
  templateUrl: './feature-profile.component.html',
  styleUrl: './feature-profile.component.scss'
})
export class FeatureProfileComponent {

  user:any

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserbyID() // Llamar al método del servicio
    .subscribe((data: any) => {
      this.user = data; // Almacenar el usuario activo
    });
  }

}
