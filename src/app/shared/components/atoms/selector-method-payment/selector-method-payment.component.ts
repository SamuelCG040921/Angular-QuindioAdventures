import { Component } from '@angular/core';

@Component({
  selector: 'app-selector-method-payment',
  templateUrl: './selector-method-payment.component.html',
  styleUrl: './selector-method-payment.component.scss'
})
export class SelectorMethodPaymentComponent {
  isSelector: boolean = false;

  toggleSelector() {
    this.isSelector = !this.isSelector;
  }
}
