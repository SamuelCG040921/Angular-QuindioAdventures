import { Component, OnInit } from '@angular/core';
import { PlansService } from '../../../../features/feature-profile/services/plans.service';
import { PlansDetails } from '../../../../features/feature-reserves/models/plans.model';

@Component({
  selector: 'app-plan-cards',
  templateUrl: './plan-cards.component.html',
  styleUrl: './plan-cards.component.scss'
})
export class PlanCardsComponent implements OnInit{

planes!: PlansDetails[];

  constructor(private plansService:PlansService){}

  ngOnInit(){
    this.plansService.getPlansConnection().then(
      (data: PlansDetails[]) => {
        console.log('Datos del chalet:', data);
        this.planes = data;
      },
      err => console.error(err)
      
    );
  }
}
