import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';
import { ReservaEmail } from '../../models/reserveEmail.model';
import { ReservaPlanInfo } from '../../models/reservePlan.model';
import { ReservesService } from '../../services/reserves.service';

@Component({
  selector: 'app-page-reserves-reserves',
  templateUrl: './page-reserves-reserves.component.html',
  styleUrl: './page-reserves-reserves.component.scss'
})
export class PageReservesReservesComponent implements OnInit{
  reserves!: ReservaEmail[];
  reservesPlan!: ReservaPlanInfo[];

constructor(public authService:AuthService, public reservesService:ReservesService){}

ngOnInit() {
   this.reservesService.getReservasByEmail().then(
    (data: ReservaEmail[]) => {
      console.log('Datos de la reserva Chalet:', data);
      this.reserves = data;
    },
    err => console.error(err)
   );

   this.reservesService.getReservasPlanByEmail().then(
    (data: ReservaPlanInfo[]) => {
      console.log('Datos de la reserva Plan:', data);
      this.reservesPlan = data
    },
    err => console.error(err)
   )
}

  }
  

