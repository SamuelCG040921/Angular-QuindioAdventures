import { Component, Input, OnInit } from '@angular/core';
import { PlansService } from '../../../../features/feature-profile/services/plans.service';
import { PlansDetails } from '../../../../features/feature-reserves/models/plans.model';

@Component({
  selector: 'app-plan-cards',
  templateUrl: './plan-cards.component.html',
  styleUrl: './plan-cards.component.scss'
})
export class PlanCardsComponent {

@Input() planes: PlansDetails[] = [];

  constructor(private plansService:PlansService){}

  
}
