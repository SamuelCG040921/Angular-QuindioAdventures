import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-messages-warning',
  templateUrl: './messages-warning.component.html',
  styleUrl: './messages-warning.component.scss'
})
export class MessagesWarningComponent {
  @Output() close = new EventEmitter<void>();

  closeAlert(): void {
    this.close.emit();
  }
}
