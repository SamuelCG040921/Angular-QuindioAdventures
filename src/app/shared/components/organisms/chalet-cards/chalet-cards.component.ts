import { Component, Input, OnInit } from '@angular/core';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';
import { ChaletDetails } from '../../../../features/feature-reserves/models/chalets.model';

@Component({
  selector: 'app-chalet-cards',
  templateUrl: './chalet-cards.component.html',
  styleUrl: './chalet-cards.component.scss'
})
export class ChaletCardsComponent {
  @Input() chalets: ChaletDetails[] = [];

  constructor(private chaletsService:ChaletsService){}

  
}
