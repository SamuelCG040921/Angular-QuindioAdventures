import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-method-payment',
  templateUrl: './button-method-payment.component.html',
  styleUrl: './button-method-payment.component.scss'
})
export class ButtonMethodPaymentComponent {
  @Input() src: string='';
  @Input() metodoPago: string=''; 
}
