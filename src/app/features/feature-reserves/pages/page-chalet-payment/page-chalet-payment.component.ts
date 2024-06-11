import { Component } from '@angular/core';

@Component({
  selector: 'app-page-chalet-payment',
  templateUrl: './page-chalet-payment.component.html',
  styleUrls: ['./page-chalet-payment.component.scss']
})
export class PageChaletPaymentComponent {
  isAlertOpen = false;

  openAlert(): void {
    this.isAlertOpen = true;
  }

  closeAlert(): void {
    this.isAlertOpen = false;
  }
}
