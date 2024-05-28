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

reservedata = [
  {
    userimg: 'https://media.licdn.com/dms/image/C4E03AQHDIIforptbQQ/profile-displayphoto-shrink_200_200/0/1594403464934?e=2147483647&v=beta&t=Vu9r7pddfbRec2uh1wdf22yYH2SqoylNRgv0Oz_MUWE',
    code: 'COL001',
    checkin: '2024-06-01',
    checkout: '2024-06-07',
    email: 'andres.hernandez@example.com',
    phone: '+573001234567',
    amount: 1500000,  // El monto está en pesos colombianos (COP)
    paymentmethod: 'Tarjeta de Crédito',
    paymentmethodimg: 'tarjeta-credito'
  },
  {
    userimg: 'https://media.licdn.com/dms/image/C4E03AQHDIIforptbQQ/profile-displayphoto-shrink_200_200/0/1594403464934?e=2147483647&v=beta&t=Vu9r7pddfbRec2uh1wdf22yYH2SqoylNRgv0Oz_MUWE',
    code: 'COL002',
    checkin: '2024-07-10',
    checkout: '2024-07-15',
    email: 'juliana.garcia@example.com',
    phone: '+573002345678',
    amount: 900000,  // El monto está en pesos colombianos (COP)
    paymentmethod: 'PSE',
    paymentmethodimg: 'pse.png'
  },
  {
    userimg: 'https://media.licdn.com/dms/image/C4E03AQHDIIforptbQQ/profile-displayphoto-shrink_200_200/0/1594403464934?e=2147483647&v=beta&t=Vu9r7pddfbRec2uh1wdf22yYH2SqoylNRgv0Oz_MUWE',
    code: 'COL003',
    checkin: '2024-08-20',
    checkout: '2024-08-25',
    email: 'camilo.martinez@example.com',
    phone: '+573003456789',
    amount: 2250000,  // El monto está en pesos colombianos (COP)
    paymentmethod: 'Transferencia Bancaria',
    paymentmethodimg: 'transferencia-bancaria.png'
  },
  {
    userimg: 'https://media.licdn.com/dms/image/C4E03AQHDIIforptbQQ/profile-displayphoto-shrink_200_200/0/1594403464934?e=2147483647&v=beta&t=Vu9r7pddfbRec2uh1wdf22yYH2SqoylNRgv0Oz_MUWE',
    code: 'COL004',
    checkin: '2024-09-05',
    checkout: '2024-09-10',
    email: 'paola.rodriguez@example.com',
    phone: '+573004567890',
    amount: 1800000,  // El monto está en pesos colombianos (COP)
    paymentmethod: 'Tarjeta de Crédito',
    paymentmethodimg: 'tarjeta-credito.png'
  },
  {
    userimg: 'https://media.gq.com/photos/63c03de4352b23af388578fc/4:3/w_2228,h_1670,c_limit/000079060004_V4.jpg',
    code: 'COL005',
    checkin: '2024-10-15',
    checkout: '2024-10-20',
    email: 'felipe.gomez@example.com',
    phone: '+573005678901',
    amount: 1350000,  // El monto está en pesos colombianos (COP)
    paymentmethod: 'Efectivo',
    paymentmethodimg: '../../../../../assets/icons/billete-de-banco.png'
  }
];

isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
  
}
