import { Component } from '@angular/core';

@Component({
  selector: 'app-page-reserves-reserves',
  templateUrl: './page-reserves-reserves.component.html',
  styleUrl: './page-reserves-reserves.component.scss'
})
export class PageReservesReservesComponent {
  reserves =[
    {
      id: 1,
      code: '000043',
      type: 'Chalet',
      adress: 'Barrio la calzada calle2 casa32',
      email: 'juanBedoya@gmail.com',
      phone: '3135129995',
      price: 510000
    },
    {
      id: 2,
      code: '000044',
      type: 'Chalet',
      adress: 'Carrera 10 #20-35',
      email: 'pedroGutierrez@hotmail.com',
      phone: '3124567890',
      price: 350000
    },
    {
      id: 3,
      code: '000045',
      type: 'Plan vacacional',
      adress: 'Avenida El Poblado Calle 70 #45',
      email: 'empresasAsocolombia@...',
      phone: '3101234567',
      price: 800000
    },
    {
      id: 4,
      code: '000046',
      type: 'Chalet',
      adress: 'Vereda La Esperanza Km 10',
      email: 'fincalosarrayanes@yahoo.com',
      phone: '3144445555',
      price: 1200000
    },
    {
      id: 5,
      code: '000047',
      type: 'Chalet',
      adress: 'Zona Industrial Calle 15 #23',
      email: 'almacenesLopez@outlook.com',
      phone: '3132223333',
      price: 600000
    }
  
  ]
  }
  

