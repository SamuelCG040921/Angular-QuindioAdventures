import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrl: './card-plan.component.scss'
})
export class CardPlanComponent {
  @Input()plan={
    nombre:"",
    ubicacion:"",
    imgPrincipal:""
   }

   openDetails(){
    
   }
}
