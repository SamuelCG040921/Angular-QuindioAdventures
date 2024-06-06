import { Component, OnInit } from '@angular/core';
import { ReservesService } from '../../services/reserves.service';

@Component({
  selector: 'app-scoped-table-clients',
  templateUrl: './scoped-table-clients.component.html',
  styleUrl: './scoped-table-clients.component.scss'
})
export class ScopedTableClientsComponent implements OnInit {
reserves: any

constructor(private reservesService:ReservesService){}

ngOnInit() {
    this.reservesService.getReserves()
    .subscribe(res=>{
      this.reserves = res
    })
}
}
