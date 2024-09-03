import { Component, EventEmitter, Output } from '@angular/core';
import { PlansInfoPerfil } from '../../../feature-reserves/models/plansInfoPerfil';
import { PlansService } from '../../services/plans.service';

@Component({
  selector: 'app-plans-profile',
  templateUrl: './plans-profile.component.html',
  styleUrl: './plans-profile.component.scss'
})
export class PlansProfileComponent {
  @Output() click = new EventEmitter<void>();
  handleClick() {
    this.click.emit();
  }
  estaDeshabilidato = false;
  habilitarDesabilitarBoton() {
    this.estaDeshabilidato = !this.estaDeshabilidato;
  }

  planes!: PlansInfoPerfil[];

  constructor(private planService:PlansService){}



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
