import { Component, Input, OnInit } from '@angular/core';
import { ReservesService } from '../../services/reserves.service';

@Component({
  selector: 'app-scoped-table-reserves',
  templateUrl: './scoped-table-reserves.component.html',
  styleUrl: './scoped-table-reserves.component.scss'
})
export class ScopedTableReservesComponent{
  reserves: any;
  selectedReserve: any = null;
  isModalOpen = false;

  @Input() reserve = {
    numero: 0,
    codigo: 0,
    tipo: "",
    precio: 0,
    direccion: '',
    telefono: '',
    checkin:'',
    checkout:'',
    estado:''
   };

  constructor(private reservesService: ReservesService) { }


  openModal(reserve: any): void {
    this.selectedReserve = reserve;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedReserve = null;
  }

  trackById(index: number, reserve: any): string {
    return reserve.codigo; // Usa un identificador único para cada reserva, como la propiedad 'codigo'
  }
}
