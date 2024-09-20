import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReservesService } from '../../../../features/feature-reserves/services/reserves.service';

@Component({
  selector: 'app-modal-reserves-plan',
  templateUrl: './modal-reserves-plan.component.html',
  styleUrl: './modal-reserves-plan.component.scss'
})
export class ModalReservesPlanComponent {
  @Input() reserve:any= {
    id_reserva: '',
    fecha: '',
    email_usuario: '',
    telefono: '',
    precioFinal: 0,
  };

  constructor(private reservesService:ReservesService){}

  isModalUpdateOpen = false;
  isAlertOpen = false;
  isAlertOpen2 = false;
  isErrorAlertOpen = false;
  isErrorAlertOpen2 = false;
  isWarningAlertOpen = false;
  isWarningAlertOpen2 = false;
  isUpdateSuccessAlertOpen = false;
  isUpdateSuccessAlertOpen2 = false;

  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  contactCustomer(): void {
    // Añadir aquí la lógica de contactar
    console.log("Contacting customer...");
  }

  cancelarReserva(){
    const id = this.reserve.id_reserva;
    this.reservesService.cancelarReservaPlan(id).then(
      response => {
        console.log("exitoso",response);
        this.openUpdateSuccessAlert();
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      }
    ).catch(
      error => {
        console.error('Error de cancelacion:', error);
        this.openErrorAlert();
      }
    )
  }

  activarReserva(){
    const id = this.reserve.id_reserva;
    this.reservesService.activarReservaPlan(id).then(
      response => {
        console.log("exitoso",response);
        this.openUpdateSuccessAlert2();
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      }
    ).catch(
      error => {
        console.error('Error de cancelacion:', error);
        this.openErrorAlert2();
      }
    )
  }


  actualizarReserva(){
    this.isModalUpdateOpen = true;
  }

  

  openAlert(): void {
    this.isAlertOpen = true;
  }

  openAlert2(): void {
    this.isAlertOpen2 = true;
  }

  closeAlert2(): void {
    this.isAlertOpen2 = false;
  }

  openErrorAlert(): void {
    this.isErrorAlertOpen = true;
  }

  openErrorAlert2(): void {
    this.isErrorAlertOpen2 = true;
  }

  closeErrorAlert(): void {
    this.isErrorAlertOpen = false;
  }

  closeErrorAlert2(): void {
    this.isErrorAlertOpen2 = false;
  }

  openWarningAlert(): void {
    this.isWarningAlertOpen = true;
  }

  openWarningAlert2(): void {
    this.isWarningAlertOpen2 = true;
  }

  closeWarningAlert(): void {
    this.isWarningAlertOpen = false;
  }

  closeWarningAlert2(): void {
    this.isWarningAlertOpen2 = false;
  }

  openUpdateSuccessAlert(): void {
    this.isUpdateSuccessAlertOpen = true;
  }

  openUpdateSuccessAlert2(): void {
    this.isUpdateSuccessAlertOpen2 = true;
  }

  closeUpdateSuccessAlert(): void {
    this.isUpdateSuccessAlertOpen = false;
  }

  closeUpdateSuccessAlert2(): void {
    this.isUpdateSuccessAlertOpen2 = false;
  }

  onConfirmModal() {
    this.cancelarReserva();
  }

  onConfirmModal2() {
    this.activarReserva();
  }

}
