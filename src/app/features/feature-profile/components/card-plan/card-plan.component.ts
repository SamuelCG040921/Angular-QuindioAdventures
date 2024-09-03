import { Component, Input } from '@angular/core';
import { PlansService } from '../../services/plans.service';
import { PlansInfoPerfil } from '../../../feature-reserves/models/plansInfoPerfil';

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrl: './card-plan.component.scss'
})
export class CardPlanComponent {
  @Input()plan:any= {
    nombre_plan:'',
    municipio_plan:'',
    fechaRegistro_plan:''
  };
  constructor(private planService:PlansService){}

}
