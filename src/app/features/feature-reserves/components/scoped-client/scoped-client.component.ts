import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoped-client',
  templateUrl: './scoped-client.component.html',
  styleUrl: './scoped-client.component.scss'
})
export class ScopedClientComponent implements OnInit{
@Input() reserve ={
  numero: 0,
  codigo: '',
  nombre: '',
  fecharegistro: '',
  telefono: '',
  precio: ''
}
constructor(){}

ngOnInit() {
    
}

isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
  
  
}