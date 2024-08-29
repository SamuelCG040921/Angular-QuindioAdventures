import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service'; // Asegúrate de que la ruta es correcta
import { ChaletInfo } from '../../../../features/feature-reserves/models/chaletsById'; // Importa tu modelo

@Component({
  selector: 'app-miga-de-pan',
  templateUrl: './miga-de-pan.component.html',
  styleUrls: ['./miga-de-pan.component.scss']
})
export class MigaDePanComponent{
  @Input()chaletNombre: string = "";
  @Input()planNombre: string = "" ;
}
