import { Component, OnInit } from '@angular/core';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';

@Component({
  selector: 'app-chalet-cards',
  templateUrl: './chalet-cards.component.html',
  styleUrl: './chalet-cards.component.scss'
})
export class ChaletCardsComponent implements OnInit {
  chalets:any;

  constructor(private chaletsService:ChaletsService){}

  ngOnInit(){
    this.chaletsService.getChalets()
    .subscribe(res=>{
      this.chalets=res
    })
  }

}
