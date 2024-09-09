import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scoped-client-plan',
  templateUrl: './scoped-client-plan.component.html',
  styleUrl: './scoped-client-plan.component.scss'
})
export class ScopedClientPlanComponent {
  isModalOpen = false
  selectedReserve: any = null;
@Input() reservePlan ={
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
constructor(){}

openModal(reserve: any): void {
  this.selectedReserve = reserve;
  this.isModalOpen = true;
}

closeModal(): void {
  this.isModalOpen = false;
  this.selectedReserve = null;
}
  
  
}
