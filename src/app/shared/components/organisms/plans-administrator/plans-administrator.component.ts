import { Component } from '@angular/core';
import { PlansService } from '../../../../features/feature-profile/services/plans.service';
import { PlansDetails } from '../../../../features/feature-reserves/models/plans.model';


@Component({
  selector: 'app-plans-administrator',
  templateUrl: './plans-administrator.component.html',
  styleUrl: './plans-administrator.component.scss'
})
export class PlansAdministratorComponent {
  planes!: PlansDetails[];

  constructor(private plansService:PlansService){}
  
   ngOnInit(){
       this.plansService.getPlansConnection().then(
        (data: PlansDetails[]) => {
          console.log('Datos del plan:', data);
          this.planes = data;
        },
        err => console.error(err)
       )
   }
}
