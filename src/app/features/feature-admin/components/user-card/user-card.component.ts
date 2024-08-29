import { Component, Input } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';
import { UserProfile } from '../../../feature-profile/models/user-profile';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
@Input()user={
  name:"",
  image:"",
}

users:any;

  constructor(public authService:AuthService){}

  ngOnInit(){
    this.authService.getUsersConnection().then(
      (data: UserProfile[]) => {
        console.log('Datos del usuario:', data);
        this.users = data
      },
      err => console.error(err)
    );
  }
}
