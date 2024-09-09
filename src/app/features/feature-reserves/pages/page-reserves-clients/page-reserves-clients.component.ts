import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';
import { ReservaEmail } from '../../models/reserveEmail.model';
import { ReservaPlanInfo } from '../../models/reservePlan.model';
import { ReservesService } from '../../services/reserves.service';

@Component({
  selector: 'app-page-reserves-clients',
  templateUrl: './page-reserves-clients.component.html',
  styleUrl: './page-reserves-clients.component.scss'
})
export class PageReservesClientsComponent implements OnInit{
  reserves!: ReservaEmail[];
  reservesPlan!: ReservaPlanInfo[];

constructor(public authService:AuthService, private reservesService: ReservesService){}

ngOnInit(): void {
    this.reservesService.getReservesOfMyChalets().then(
      (data: ReservaEmail[]) => {
        console.log('Datos de la reserva:', data);
        this.reserves = data
      },
      err => console.error(err)
    );

    this.reservesService.getReservesOfMyPlans().then(
      (data: ReservaPlanInfo[])=>{
        console.log('Datos de la reserva plan:', data);
        this.reservesPlan = data
      },
      err => console.error(err)
    );
}
  }
  

