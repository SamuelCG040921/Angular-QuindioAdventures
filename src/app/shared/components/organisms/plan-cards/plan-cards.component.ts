import { Component, OnInit } from '@angular/core';
import { PlansService } from '../../../../features/feature-reserves/services/plans.service';

@Component({
  selector: 'app-plan-cards',
  templateUrl: './plan-cards.component.html',
  styleUrl: './plan-cards.component.scss'
})
export class PlanCardsComponent implements OnInit{
planes:any

constructor(private plansService:PlansService){}

 ngOnInit(){
     this.plansService.getPlans()
     .subscribe(res=>{
      this.planes = res
     })
 }
}
