import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReservesService } from '../../../../features/feature-reserves/services/reserves.service';

@Component({
  selector: 'app-modal-reserves-plan',
  templateUrl: './modal-reserves-plan.component.html',
  styleUrl: './modal-reserves-plan.component.scss'
})
export class ModalReservesPlanComponent {
  @Input() reserve:any= {
    id_reserva: '',
    fecha: '',
    email_usuario: '',
    telefono: '',
    precioFinal: 0,
  };

  constructor(private reservesService:ReservesService){}

  isModalUpdateOpen = false;

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

  actualizarReserva(){
    this.isModalUpdateOpen = true;
  }
}
