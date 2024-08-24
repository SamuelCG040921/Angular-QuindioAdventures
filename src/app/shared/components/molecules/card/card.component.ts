import { Component, Input } from '@angular/core';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';
import { ChaletDetails } from '../../../../features/feature-reserves/models/chalets.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
   @Input()chalet={
    nombre:"",
    ubicacion:"",
    imgPrincipal:""
   }

   openDetails(chalet:any){
      return ['/chalet-details', chalet.id];
   }

   chalets:any;

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
