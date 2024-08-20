import { Component } from '@angular/core';
import { PlansService } from '../../../../features/feature-reserves/services/plans.service';

@Component({
  selector: 'app-plans-administrator',
  templateUrl: './plans-administrator.component.html',
  styleUrl: './plans-administrator.component.scss'
})
export class PlansAdministratorComponent {
  planes:any

  constructor(private plansService:PlansService){}
  
   ngOnInit(){
       this.plansService.getPlans()
       .subscribe(res=>{
        this.planes = res
       })
   }
}
