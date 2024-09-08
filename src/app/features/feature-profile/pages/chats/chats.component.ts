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

  users = [
    { nombres: 'Juan Pérez' },
    { nombres: 'Ana López' },
    { nombres: 'Carlos Martínez' },
    { nombres: 'Carlos Martínez' },
    { nombres: 'Carlos Martínez' },
    { nombres: 'Juan Pérez' },
    { nombres: 'Juan Pérez' },
    { nombres: 'Juan Pérez' },
    { nombres: 'Juan Pérez' },
    { nombres: 'Juan Pérez' },
  ];
  user:any
  location: any;

  activeUserIndex: number | null = null; // Almacena el índice del contenedor activo

  // Función para cambiar el contenedor activo
  setActiveUser(index: number): void {
    this.activeUserIndex = index;
  }

  // Verifica si un contenedor es el activo
  isActive(index: number): boolean {
    return this.activeUserIndex === index;
  }

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserbyID() // Llamar al método del servicio
    .subscribe((data: any) => {
      this.user = data; // Almacenar el usuario activo
    });
  }
}
