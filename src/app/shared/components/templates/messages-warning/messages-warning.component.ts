import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-messages-warning',
  templateUrl: './messages-warning.component.html',
  styleUrls: ['./messages-warning.component.scss']
})
export class MessagesWarningComponent {
  @Input() title!: string;
  @Input() paragraph!: string;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>(); // Nuevo evento para confirmar

  closeAlert() {
    this.close.emit();
  }

  confirmAction() {
    this.confirm.emit(); // Emitir el evento de confirmación
    this.closeAlert();   // Cerrar el modal después de confirmar
  }
}
