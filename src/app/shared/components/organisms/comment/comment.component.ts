import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
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
  };

  @Input() tipoEntidad: string = '';
  @Input() userEmail: string | null = null;
  @Output() eliminarComentarioEvent = new EventEmitter<number>(); 

  // Método para eliminar el comentario
  eliminarComentario(id_opinion: number) {
    console.log('Eliminando comentario con ID:', id_opinion);
    this.eliminarComentarioEvent.emit(this.comment.id_opinion);
  }
}
