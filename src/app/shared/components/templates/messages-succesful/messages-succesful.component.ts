import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-messages-succesful',
  templateUrl: './messages-succesful.component.html',
  styleUrl: './messages-succesful.component.scss'
})
export class MessagesSuccesfulComponent {
  @Output() close = new EventEmitter<void>();
  @Input() title:string = '';
  closeAlert(): void {
    this.close.emit();
  }
}
