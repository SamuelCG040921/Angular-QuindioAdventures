import { Component, Input } from '@angular/core';
import { UserService } from '../../../feature-reserves/services/user.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.scss'
})
export class ChatsComponent {
  @Input() width = '';
  @Input() height = '';

  user:any
  location: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserbyID() // Llamar al método del servicio
    .subscribe((data: any) => {
      this.user = data; // Almacenar el usuario activo
    });
}
}
