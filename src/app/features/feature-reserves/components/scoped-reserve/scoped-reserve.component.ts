import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scoped-reserve',
  templateUrl: './scoped-reserve.component.html',
  styleUrl: './scoped-reserve.component.scss'
})
export class ScopedReserveComponent implements OnInit {
  @Input() reserve = {
    id: 0,
    code: '',
    type: '',
    adress: '',
    email: '',
    phone: '',
    price: 0
  };
  

  constructor(){}

  ngOnInit() {
    
  }
}
