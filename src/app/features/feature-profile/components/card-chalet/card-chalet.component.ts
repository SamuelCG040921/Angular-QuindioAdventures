import { Component } from '@angular/core';
import { ChaletsService } from '../../../feature-reserves/services/chalets.service';
import { ChaletsInfoPerfil } from '../../../feature-reserves/models/chaletsInfoPerfil';

@Component({
  selector: 'app-card-chalet',
  templateUrl: './card-chalet.component.html',
  styleUrl: './card-chalet.component.scss'
})
export class CardChaletComponent {
  chalets!:ChaletsInfoPerfil[];

  constructor(private chaletsService:ChaletsService){}

  ngOnInit(){
    this.chaletsService.getChaletsByEmail().then(
      (data: ChaletsInfoPerfil[]) => {
        this.chalets = data;
        
      },
      err => {
        console.error('Error en la solicitud:', err.response.data);
      }
    );
  }
}
