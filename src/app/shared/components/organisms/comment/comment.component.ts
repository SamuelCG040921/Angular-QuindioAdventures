import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  @Input() comment = {
    id_opinion: 0,
    email_usuario: '',
    opinion: '',
    fechaCreacion: '',
    hora: '',
    calificacion: 0,
    nombres: '',
    apellidos: '',
    image: ''
  }
}
