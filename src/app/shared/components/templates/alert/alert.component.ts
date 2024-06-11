import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Output() close = new EventEmitter<void>();

  closeAlert(): void {
    this.close.emit();
  }
}
