import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-email',
  templateUrl: './modal-email.component.html',
  styleUrl: './modal-email.component.scss'
})
export class ModalEmailComponent {
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

}
