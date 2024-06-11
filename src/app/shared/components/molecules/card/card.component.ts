import { Component, Input } from '@angular/core';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';

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
      return ['/chalet-details', chalet.codigo];
   }

   chalets:any;

  constructor(private chaletsService:ChaletsService){}

  ngOnInit(){
    this.chaletsService.getChalets()
    .subscribe(res=>{
      this.chalets=res
    })
  }

}
