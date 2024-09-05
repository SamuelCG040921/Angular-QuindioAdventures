import { Component } from '@angular/core';
import { PlansDetails } from '../../../../features/feature-reserves/models/plans.model';
import { PlansService } from '../../../../features/feature-reserves/services/plans.service';


@Component({
  selector: 'app-plans-administrator',
  templateUrl: './plans-administrator.component.html',
  styleUrl: './plans-administrator.component.scss'
})
export class PlansAdministratorComponent {
  planes!: PlansDetails[];

  constructor(private plansService:PlansService){}
  
   ngOnInit(){
       this.plansService.getPlanesConnectionAdmin().then(
        (data: PlansDetails[]) => {
          console.log('Datos del plan:', data);
          this.planes = data;
        },
        err => console.error(err)
       )
   }
}
