import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoped-reserve',
  templateUrl: './scoped-reserve.component.html',
  styleUrl: './scoped-reserve.component.scss'
})
export class ScopedReserveComponent implements OnInit {
  reserve = {
    id: 1,
    code: '000043',
    client: 'Juan Bedoya',
    date: '04/09/21',
    adress: 'Barrio la calzada calle2 casa32',
    email: 'juanBedolla@gmail.com',
    phone: '3135129995',
    price: '510.000'
  }

  constructor(){}

  ngOnInit() {
    
  }
}
