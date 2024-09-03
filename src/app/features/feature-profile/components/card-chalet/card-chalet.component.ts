import { Component, Input } from '@angular/core';
import { ChaletsService } from '../../../feature-reserves/services/chalets.service';
import { ChaletsInfoPerfil } from '../../../feature-reserves/models/chaletsInfoPerfil';

@Component({
  selector: 'app-card-chalet',
  templateUrl: './card-chalet.component.html',
  styleUrl: './card-chalet.component.scss'
})
export class CardChaletComponent {
  @Input()chalet:any = {
    nombre_chalet:'',
    municipio_chalet:'',
    fechaRegistro_chalet:''
  }

  constructor(private chaletsService: ChaletsService){}
}
