import { Component, OnInit } from '@angular/core';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';

@Component({
  selector: 'app-recommendeds-cards',
  templateUrl: './recommendeds-cards.component.html',
  styleUrl: './recommendeds-cards.component.scss'
})
export class RecommendedsCardsComponent implements OnInit {
  chalets:any;

  constructor(private chaletsService:ChaletsService){}

  ngOnInit(){
    this.chaletsService.getChalets()
    .subscribe(res=>{
      this.chalets=res
    })
  }
}
