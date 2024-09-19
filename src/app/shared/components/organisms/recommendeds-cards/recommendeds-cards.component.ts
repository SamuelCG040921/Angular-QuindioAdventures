import { Component, Input, OnInit } from '@angular/core';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';
import { ChaletDetails } from '../../../../features/feature-reserves/models/chalets.model';
import { RecommendedService } from '../../../../features/feature-reserves/services/recommended.service';

@Component({
  selector: 'app-recommendeds-cards',
  templateUrl: './recommendeds-cards.component.html',
  styleUrl: './recommendeds-cards.component.scss'
})
export class RecommendedsCardsComponent {
  @Input() recommendeds: ChaletDetails[] = [];

  constructor(private recommendedService: RecommendedService){}

}
