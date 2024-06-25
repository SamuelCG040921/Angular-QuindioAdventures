import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-scoped-reserve',
  templateUrl: './scoped-reserve.component.html',
  styleUrl: './scoped-reserve.component.scss'
})
export class ScopedReserveComponent implements OnInit {
  @Input() reserve = {
   numero: 0,
   codigo: 0,
   tipo: "",
   precio: 0,
   direccion: '',
   telefono: ''
  };

 

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
