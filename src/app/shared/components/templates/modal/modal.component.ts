import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() reservedata= {
    code: '',
    checkin: '',
    checkout: '',
    email: '',
    phone: '',
    amount: 0,
    paymentmethod:'',
    paymentmethodimg:'',
    userimg:''
  };

  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  contactCustomer(): void {
    // Añade aquí tu lógica de contacto
    console.log("Contacting customer...");
  }
}

