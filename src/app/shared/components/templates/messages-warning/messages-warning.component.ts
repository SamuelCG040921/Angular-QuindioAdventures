import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-messages-warning',
  templateUrl: './messages-warning.component.html',
  styleUrl: './messages-warning.component.scss'
})
export class MessagesWarningComponent {
  @Output() close = new EventEmitter<void>();
  @Input() paragraph:string = '';
  @Input() title:string = '';

  closeAlert(): void {
    this.close.emit();
  }
}
