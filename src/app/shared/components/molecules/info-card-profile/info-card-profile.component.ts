import { Component, Input, input } from '@angular/core';
import { ReservesService } from '../../../../features/feature-reserves/services/reserves.service';
import { PlansService } from '../../../../features/feature-profile/services/plans.service';
import { PlansInfoPerfil } from '../../../../features/feature-reserves/models/plansInfoPerfil';

@Component({
  selector: 'app-info-card-profile',
  templateUrl: './info-card-profile.component.html',
  styleUrl: './info-card-profile.component.scss'
})
export class InfoCardProfileComponent {
  plans!: PlansInfoPerfil[];

  @Input() fechaRegistro_plan:any ='';

  constructor(private plansService: PlansService) {}

  ngOnInit() {
    this.plansService.getPlansByEmail().then(
      (data: PlansInfoPerfil[]) => {
        this.plans = data;
      },
      err => {
        console.error('Error en la solicitud:', err);
      }
    );
  }

  eliminarPlan(id: number) {
    this.plansService.eliminarPlan(id).then(
      response => {
        console.log('plan eliminado:', response);
        // Actualizar la lista de chalets después de eliminar
        this.plans = this.plans.filter(plan => plan.id_plan !== id);
      },
      err => {
        console.error('Error eliminando el plan:', err);
      }
    );
  }
  
}

