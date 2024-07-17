import { Component } from '@angular/core';
import { UserService } from '../../../feature-reserves/services/user.service';

@Component({
  selector: 'app-chalet-register-form',
  templateUrl: './chalet-register-form.component.html',
  styleUrl: './chalet-register-form.component.scss'
})
export class ChaletRegisterFormComponent {
  user:any
  isInputDisabled = true;

  habilitarInput() {
    this.isInputDisabled = false;
  } 

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserbyID() // Llamar al método del servicio
    .subscribe((data: any) => {
      this.user = data; // Almacenar el usuario activo
    });
  }

}
