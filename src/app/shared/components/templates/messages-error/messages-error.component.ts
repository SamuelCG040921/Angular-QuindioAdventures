import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-messages-error',
  templateUrl: './messages-error.component.html',
  styleUrls: ['./messages-error.component.scss']
})
export class MessagesErrorComponent {
  @Output() close = new EventEmitter<void>();
  @Input() paragraph:string='';
  @Input() title:string='';

  closeAlert(): void {
    this.close.emit();
  }
}
