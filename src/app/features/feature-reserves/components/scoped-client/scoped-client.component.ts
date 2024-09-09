import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoped-client',
  templateUrl: './scoped-client.component.html',
  styleUrl: './scoped-client.component.scss'
})
export class ScopedClientComponent{
  isModalOpen = false
  selectedReserve: any = null;
@Input() reserve ={
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