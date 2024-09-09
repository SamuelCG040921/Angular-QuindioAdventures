import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { ReservesService } from '../../../../features/feature-reserves/services/reserves.service';
import { compileClassDebugInfo } from '@angular/compiler';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent{
  @Input() reserve:any= {
    id_reserva: '',
    fechaInicio: '',
    fechaFin: '',
    email_usuario: '',
    telefono: '',
    precioFinal: 0,
  };

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

