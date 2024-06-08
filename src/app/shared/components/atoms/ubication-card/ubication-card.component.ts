import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ubication-card',
  templateUrl: './ubication-card.component.html',
  styleUrl: './ubication-card.component.scss'
})
export class UbicationCardComponent {
  @Input()chalet={
   ubicacion: ""
  }
}
