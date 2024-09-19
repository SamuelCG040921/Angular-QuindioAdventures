import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recommended-card',
  templateUrl: './recommended-card.component.html',
  styleUrl: './recommended-card.component.scss'
})
export class RecommendedCardComponent {
  @Input()recommended={
    nombre:"",
    ubicacion:"",
    imgPrincipal:"",
    municipio: "",
   }

}
