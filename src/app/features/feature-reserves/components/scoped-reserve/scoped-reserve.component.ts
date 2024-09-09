import { Component, OnInit, Input } from '@angular/core';
import { ReservesService } from '../../services/reserves.service';

@Component({
  selector: 'app-scoped-reserve',
  templateUrl: './scoped-reserve.component.html',
  styleUrls: ['./scoped-reserve.component.scss']
})
export class ScopedReserveComponent {

  selectedReserve: any = null;
  isModalOpen = false;

  @Input() reserve = {
   id_reserva: 0,
   id_chalet_usuario: 0,
   email_usuario: '',
   documento: '',
   cantPersonas: 0,
   nombre: '',
   apellido: '',
   telefono: '',
   direccion: '',
   precioFinal: 0,
   estancia: '',
   fechaInicio: '',
   fechaFin: '',
   estado: 0
  }

  constructor(private reservesService: ReservesService) { }

  

  openModal(reserve: any): void {
    this.selectedReserve = reserve;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedReserve = null;
  }

}
