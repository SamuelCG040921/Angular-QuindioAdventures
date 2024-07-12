import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReservesService } from '../../../../features/feature-reserves/services/reserves.service';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrl: './modal-update.component.scss'
})
export class ModalUpdateComponent{
  @Input() reserve:any= {
    chaletimg:'',
    codigo: '',
    checkin: '',
    checkout: '',
    correo: '',
    telefono: '',
    precio: 0,
    paymentmethod:'',
    paymentmethodimg:'',
  };

  isWarningAlertOpen = false

  closeWarningAlert(){
    this.isWarningAlertOpen = false
  }

  openWarningAlert(){
    this.isWarningAlertOpen = true
  }

  constructor(private reservesService:ReservesService){}

  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  contactCustomer(): void {
    // Añadir aquí la lógica de contactar
    console.log("Contacting customer...");
  }

  cancelarReserva(){
    
  }
}
