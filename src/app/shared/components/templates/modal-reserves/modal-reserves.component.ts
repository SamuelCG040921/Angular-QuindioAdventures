import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReservesService } from '../../../../features/feature-reserves/services/reserves.service';

@Component({
  selector: 'app-modal-reserves',
  templateUrl: './modal-reserves.component.html',
  styleUrl: './modal-reserves.component.scss'
})
export class ModalReservesComponent implements OnInit {
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

  ngOnInit(): void {
    this.reservesService.getReservebyCode(this.reserve.codigo).
    subscribe((res=>{
       this.reserve = res
    }))
  }
}
