import { Component, Input } from '@angular/core';
import { ReservesService } from '../../services/reserves.service';

@Component({
  selector: 'app-scoped-reserve-plan',
  templateUrl: './scoped-reserve-plan.component.html',
  styleUrl: './scoped-reserve-plan.component.scss'
})
export class ScopedReservePlanComponent {

  selectedReserve: any = null;
  isModalOpen = false;

  @Input() reservePlan = {
   id_reserva: 0,
   id_planV_usuario: 0,
   email_usuario: '',
   documento: '',
   cantPersonas: 0,
   nombre: '',
   apellido: '',
   telefono: '',
   direccion: '',
   precioFinal: 0,
   fecha: '',
   fechaRegistro: '',
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
