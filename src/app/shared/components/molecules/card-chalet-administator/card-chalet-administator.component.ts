import { Component, Input } from '@angular/core';
import { ChaletDetails } from '../../../../features/feature-reserves/models/chalets.model';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';

@Component({
  selector: 'app-card-chalet-administator',
  templateUrl: './card-chalet-administator.component.html',
  styleUrls: ['./card-chalet-administator.component.scss']
})
export class CardChaletAdministatorComponent {
  @Input() chalet: ChaletDetails = {
    nombre: "",
    ubicacion: "",
    imgPrincipal: "",
    id: '',
    municipio: '',
    descripcion: '',
    tarifa: [],
    servicio: [],
    codigo: undefined
  };
  
  constructor(private chaletsService: ChaletsService) {}

  chalets!: ChaletDetails[];
  isAlertOpen = false;
  isErrorAlertOpen = false;
  isWarningAlertOpen = false;
  isUpdateSuccessAlertOpen = false;
  chaletIdToDelete: string | null = null;
  isAlertOpen2 = false;
  isErrorAlertOpen2 = false;
  isWarningAlertOpen2 = false;
  isUpdateSuccessAlertOpen2 = false;

  openDetails(chalet: ChaletDetails) {
    return ['/chalet-details', chalet.codigo];
  }

  activarChalet(id: string) {
    this.chaletsService.activarChalet(id).then(
      response => {
        console.log(id,234);
        this.openUpdateSuccessAlert();
        console.log('Chalet activado:', response);
        this.chalets = this.chalets.filter(chalet => chalet.id !== id);
      },
      err => {
        console.error('Error activando el chalet:', err);
        this.openErrorAlert();
      }
    );
  }

  openWarningAlert(chaletId: string): void {
    this.chaletIdToDelete = chaletId;
    this.isWarningAlertOpen = true;
  }

  closeWarningAlert(): void {
    this.isWarningAlertOpen = false;
    this.chaletIdToDelete = null;
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
    if (this.chaletIdToDelete !== null) {
      this.activarChalet(this.chaletIdToDelete);
      this.closeWarningAlert();
    }
  }


  desactivarChalet(id: string) {
    this.chaletsService.desactivarChalet(id).then(
      response => {
        console.log(id,234);
        this.openUpdateSuccessAlert2();
        console.log('Chalet desactivado:', response);
        this.chalets = this.chalets.filter(chalet => chalet.id !== id);
      },
      err => {
        console.error('Error desactivando el chalet:', err);
        this.openErrorAlert2();
      }
    );
  }

  openWarningAlert2(chaletId: string): void {
    this.chaletIdToDelete = chaletId;
    this.isWarningAlertOpen2 = true;
  }

  closeWarningAlert2(): void {
    this.isWarningAlertOpen2 = false;
    this.chaletIdToDelete = null;
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
    if (this.chaletIdToDelete !== null) {
      this.desactivarChalet(this.chaletIdToDelete);
      this.closeWarningAlert2();
    }
  }
}
