import { Component } from '@angular/core';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';

@Component({
  selector: 'app-page-recommend',
  templateUrl: './page-recommend.component.html',
  styleUrl: './page-recommend.component.scss'
})
export class PageRecommendComponent {
  recommended:any;

  constructor(private chaletsService:ChaletsService){}

  ngOnInit(){
    this.recommended = []
  }
}
