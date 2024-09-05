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
  isAlertOpen = false;
  isErrorAlertOpen = false;
  isErrorAlertOpen2 = false;
  isWarningAlertOpen = false;
  isUpdateSuccessAlertOpen = false;
  planIdToDelete: number | null = null;

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
        this.openUpdateSuccessAlert();
        setTimeout(()=>{
          window.location.reload();
        }, 1300);
      },
      err => {
        console.error('Error eliminando el plan:', err);
        this.openErrorAlert();
      }
    );
  }

  openWarningAlert(id: number): void {
    this.planIdToDelete = id;
    this.isWarningAlertOpen = true;
  }

  closeWarningAlert(): void {
    this.isWarningAlertOpen = false;
    this.planIdToDelete = null;
  }

  openUpdateSuccessAlert(): void {
    this.isUpdateSuccessAlertOpen = true;
  }

  closeUpdateSuccessAlert(): void {
    this.isUpdateSuccessAlertOpen = false;
  }

  openErrorAlert(): void {
    this.isErrorAlertOpen = true;
  }

  closeErrorAlert(): void {
    this.isErrorAlertOpen = false;
  }

  onConfirmModal(): void {
    if (this.planIdToDelete !== null) {
      this.eliminarPlan(this.planIdToDelete);
      this.closeWarningAlert();
    }
  }
  
}

