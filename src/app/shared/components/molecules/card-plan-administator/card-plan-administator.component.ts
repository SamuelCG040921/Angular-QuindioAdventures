import { Component, Input } from '@angular/core';
import { PlansService } from '../../../../features/feature-reserves/services/plans.service';
import { PlansDetails } from '../../../../features/feature-reserves/models/plans.model';

@Component({
  selector: 'app-card-plan-administator',
  templateUrl: './card-plan-administator.component.html',
  styleUrl: './card-plan-administator.component.scss'
})
export class CardPlanAdministatorComponent {
  @Input() plan: PlansDetails = {
    nombre: "",
    ubicacion: "",
    imgPrincipal: "",
    id: '',
    municipio: '',
    descripcion: '',
    tarifa: []
  };
  
  constructor(private plansService: PlansService) {}

  planes!: PlansDetails[];
  isAlertOpen = false;
  isErrorAlertOpen = false;
  isWarningAlertOpen = false;
  isUpdateSuccessAlertOpen = false;
  planIdToDelete: string | null = null;
  isAlertOpen2 = false;
  isErrorAlertOpen2 = false;
  isWarningAlertOpen2 = false;
  isUpdateSuccessAlertOpen2 = false;

  openDetails(chalet: PlansDetails) {
    return ['/plan-details', chalet.id];
  }

  activarPlan(id: string) {
    this.plansService.activarPlan(id).then(
      response => {
        console.log(id,234);
        this.openUpdateSuccessAlert();
        console.log('Plan activado:', response);
        this.planes = this.planes.filter(plan => plan.id !== id);
      },
      err => {
        console.error('Error activando el chalet:', err);
        this.openErrorAlert();
      }
    );
  }

  openWarningAlert(chaletId: string): void {
    this.planIdToDelete = chaletId;
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
      this.activarPlan(this.planIdToDelete);
      this.closeWarningAlert();
    }
  }


  desactivarPlan(id: string) {
    this.plansService.desactivarPlan(id).then(
      response => {
        console.log(id,234);
        this.openUpdateSuccessAlert2();
        console.log('Plan desactivado:', response);
        this.planes = this.planes.filter(plan => plan.id !== id);
      },
      err => {
        console.error('Error desactivando el plan:', err);
        this.openErrorAlert2();
      }
    );
  }

  openWarningAlert2(planId: string): void {
    this.planIdToDelete = planId;
    this.isWarningAlertOpen2 = true;
  }

  closeWarningAlert2(): void {
    this.isWarningAlertOpen2 = false;
    this.planIdToDelete = null;
  }

  openUpdateSuccessAlert2(): void {
    this.isUpdateSuccessAlertOpen2 = true;
  }

  closeUpdateSuccessAlert2(): void {
    this.isUpdateSuccessAlertOpen2 = false;
  }

  openErrorAlert2(): void {
    this.isErrorAlertOpen2 = true;
  }

  closeErrorAlert2(): void {
    this.isErrorAlertOpen2 = false;
  }

  onConfirmModal2(): void {
    if (this.planIdToDelete !== null) {
      this.desactivarPlan(this.planIdToDelete);
      this.closeWarningAlert2();
    }
  }
}
