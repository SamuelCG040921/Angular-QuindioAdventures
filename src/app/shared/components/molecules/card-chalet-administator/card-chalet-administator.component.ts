import { Component, Input } from '@angular/core';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';

@Component({
  selector: 'app-card-chalet-administator',
  templateUrl: './card-chalet-administator.component.html',
  styleUrl: './card-chalet-administator.component.scss'
})
export class CardChaletAdministatorComponent {
  @Input()chalet={
    nombre:"",
    ubicacion:"",
    imgPrincipal:""
   }

   openDetails(chalet:any){
      return ['/chalet-details', chalet.codigo];
   }

   chalets:any;

  constructor(private chaletsService:ChaletsService){}

  ngOnInit(){
    
  }
}
