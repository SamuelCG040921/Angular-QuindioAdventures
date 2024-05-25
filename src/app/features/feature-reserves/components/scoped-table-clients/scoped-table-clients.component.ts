import { Component } from '@angular/core';

@Component({
  selector: 'app-scoped-table-clients',
  templateUrl: './scoped-table-clients.component.html',
  styleUrl: './scoped-table-clients.component.scss'
})
export class ScopedTableClientsComponent {
clients = [
  {
    id: 1,
  code: '000043',
  client: 'Juan Bedoya',
  date: '24/04/24',
  adress: 'Barrio las acacias calle 12',
  email: 'juanbedoya@gmail.com',
  phone: '3053305459',
  price: 590000
  },{
    id: 2,
  code: '000044',
  client: 'Juan Tovar',
  date: '24/04/24',
  adress: 'Barrio los quindos calle 13',
  email: 'juantovar@gmail.com',
  phone: '30533054379',
  price: 800000
  },
  {
    id: 3,
  code: '000045',
  client: 'Camilo Balsero',
  date: '24/04/24',
  adress: 'Barrio villa del carmen calle 16',
  email: 'camilobalsero16@gmail.com',
  phone: '3053305459',
  price: 990000
  },
  {
    id: 1,
  code: '000043',
  client: 'Juan Bedoya',
  date: '24/04/24',
  adress: 'Barrio las acacias calle 12',
  email: 'juanbedoya@gmail.com',
  phone: '3053305459',
  price: 590000
  },
  {
    id: 1,
  code: '000043',
  client: 'Juan Bedoya',
  date: '24/04/24',
  adress: 'Barrio las acacias calle 12',
  email: 'juanbedoya@gmail.com',
  phone: '3053305459',
  price: 590000
  }
]
}
