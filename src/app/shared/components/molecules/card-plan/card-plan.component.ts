import { Component, Input } from '@angular/core';
import { PlansDetails } from '../../../../features/feature-reserves/models/plans.model';
import { PlansService } from '../../../../features/feature-profile/services/plans.service';

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrl: './card-plan.component.scss'
})
export class CardPlanComponent {
  @Input()plan={
    nombre:"",
    ubicacion:"",
    imgPrincipal:"",
    municipio: "",
   }

   openDetails(plan:any){
    return ['/', plan.id];
 }

 plans:any;

 constructor(private plansService:PlansService){}

 ngOnInit(){
  this.plansService.getPlansConnection().then(
    (data: PlansDetails[]) => {
      console.log('Datos del chalet:', data);
      this.plans = data;
    },
    err => console.error(err)
    
  );
}
}
