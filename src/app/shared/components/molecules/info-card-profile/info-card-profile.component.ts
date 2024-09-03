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
  @Input() fechaRegistro_plan:any = '';
  
  constructor(private planService:PlansService){}

}
