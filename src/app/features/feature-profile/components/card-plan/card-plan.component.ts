import { Component, Input } from '@angular/core';
import { PlansService } from '../../services/plans.service';
import { PlansInfoPerfil } from '../../../feature-reserves/models/plansInfoPerfil';

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrl: './card-plan.component.scss'
})
export class CardPlanComponent {
  @Input()chalets:any= {
    nombre:'',
  };
  constructor(private planService:PlansService){}

  planes!:PlansInfoPerfil[];

  ngOnInit(){
    this.planService.getPlansByEmail().then(
      (data: PlansInfoPerfil[]) => {
        this.planes = data;
        
      },
      err => {
        console.error('Error en la solicitud:', err.response.data);
      }
    );
  }
}
