import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';
import { UserProfile } from '../../../feature-profile/models/user-profile';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.scss'
})
export class TableUsersComponent implements OnInit{
 users!: UserProfile[];

 constructor(private authService:AuthService){}

 ngOnInit(){
     this.authService.getUsersConnection().then(
      (data: UserProfile[]) => {
        console.log('Datos del usuario:', data);
        this.users = data;
      },
      err => console.error(err)
     );
 }
}

