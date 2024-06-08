import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-miga-de-pan',
  templateUrl: './miga-de-pan.component.html',
  styleUrl: './miga-de-pan.component.scss'
})
export class MigaDePanComponent{
  
  @Input() chalets = {
    nombre: '',
    descripcion: '',
    ubicacion: ''
  }


}