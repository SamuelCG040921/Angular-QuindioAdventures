import { Component, OnInit } from '@angular/core';
import { ReservesService } from '../../services/reserves.service';

@Component({
  selector: 'app-page-reserves-clients',
  templateUrl: './page-reserves-clients.component.html',
  styleUrl: './page-reserves-clients.component.scss'
})
export class PageReservesClientsComponent implements OnInit {
  reserves: any

constructor(private reservesService:ReservesService){}

ngOnInit() {
    this.reservesService.getReserves()
    .subscribe(res=>{
      this.reserves = res
    })
}
  }
  

