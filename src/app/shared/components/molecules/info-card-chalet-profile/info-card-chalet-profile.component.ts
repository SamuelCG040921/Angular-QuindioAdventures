import { Component, Input } from '@angular/core';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';
import { ChaletsInfoPerfil } from '../../../../features/feature-reserves/models/chaletsInfoPerfil';

@Component({
  selector: 'app-info-card-chalet-profile',
  templateUrl: './info-card-chalet-profile.component.html',
  styleUrls: ['./info-card-chalet-profile.component.scss']
})
export class InfoCardChaletProfileComponent {

  chalets!: ChaletsInfoPerfil[];
  isAlertOpen = false;
  isErrorAlertOpen = false;
  isErrorAlertOpen2 = false;
  isWarningAlertOpen = false;
  isUpdateSuccessAlertOpen = false;
  chaletIdToDelete: number | null = null;

  @Input() fechaRegistro_chalet: any = '';

  constructor(private chaletsService: ChaletsService) {}

  ngOnInit() {
    this.chaletsService.getChaletsByEmail().then(
      (data: ChaletsInfoPerfil[]) => {
        this.chalets = data;
      },
      err => {
        console.error('Error en la solicitud:', err);
      }
    );
  }

  eliminarChalet(id: number) {
    this.chaletsService.eliminarChalet(id).then(
      response => {
        console.log('Chalet eliminado:', response);
        // Actualizar la lista de chalets después de eliminar
        this.chalets = this.chalets.filter(chalet => chalet.id_chalet !== id);
        this.openUpdateSuccessAlert();
        setTimeout(() => {
          window.location.reload();
        }, 1300);
      },
      err => {
        console.error('Error eliminando el chalet:', err);
        this.openErrorAlert();
      }
    );
  }

  openWarningAlert(id: number): void {
    this.chaletIdToDelete = id;
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
      this.eliminarChalet(this.chaletIdToDelete);
      this.closeWarningAlert();
    }
  }
}
