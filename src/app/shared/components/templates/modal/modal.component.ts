import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { ReservesService } from '../../../../features/feature-reserves/services/reserves.service';
import { compileClassDebugInfo } from '@angular/compiler';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
  @Input() reserve:any= {
    userimg:'',
    codigo: '',
    fechainicio: '',
    fechafin: '',
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

