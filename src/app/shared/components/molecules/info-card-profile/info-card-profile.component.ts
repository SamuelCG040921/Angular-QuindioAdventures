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
  @Input()info:any= {
    fechaRegistro:''
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
