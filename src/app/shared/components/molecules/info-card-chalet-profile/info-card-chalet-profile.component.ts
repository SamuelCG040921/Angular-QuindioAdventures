import { Component, Input } from '@angular/core';
import { ReservesService } from '../../../../features/feature-reserves/services/reserves.service';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';
import { ChaletsInfoPerfil } from '../../../../features/feature-reserves/models/chaletsInfoPerfil';

@Component({
  selector: 'app-info-card-chalet-profile',
  templateUrl: './info-card-chalet-profile.component.html',
  styleUrl: './info-card-chalet-profile.component.scss'
})
export class InfoCardChaletProfileComponent {

  @Input() fechaRegistro_chalet:any ='';

  constructor(private chaletsService: ChaletsService){}
  
}
