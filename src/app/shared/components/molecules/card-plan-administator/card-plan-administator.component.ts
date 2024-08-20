import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-plan-administator',
  templateUrl: './card-plan-administator.component.html',
  styleUrl: './card-plan-administator.component.scss'
})
export class CardPlanAdministatorComponent {
  @Input()plan={
    nombre:"",
    ubicacion:"",
    imgPrincipal:""
   }

}
