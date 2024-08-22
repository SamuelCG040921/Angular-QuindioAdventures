import { Component, OnInit } from '@angular/core';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';
import { ChaletDetails } from '../../../../features/feature-reserves/models/chalets.model';

@Component({
  selector: 'app-chalet-cards',
  templateUrl: './chalet-cards.component.html',
  styleUrl: './chalet-cards.component.scss'
})
export class ChaletCardsComponent implements OnInit {
  chalets!: ChaletDetails[];

  constructor(private chaletsService:ChaletsService){}

  ngOnInit(){
    this.chaletsService.getChaletsConnection().then(
      (data: ChaletDetails[]) => {
        console.log('Datos del chalet:', data);
        this.chalets = data;
      },
      err => console.error(err)
      
    );
  }
}
