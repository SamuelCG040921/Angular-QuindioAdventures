import { Component, OnInit } from '@angular/core';
import { ReservesService } from '../../services/reserves.service';


@Component({
  selector: 'app-scoped-table-reserves',
  templateUrl: './scoped-table-reserves.component.html',
  styleUrl: './scoped-table-reserves.component.scss'
})
export class ScopedTableReservesComponent implements OnInit {
reserves: any

constructor(private reservesService:ReservesService,){}

ngOnInit() {
    this.reservesService.getReserves()
    .subscribe(res =>{
      this.reserves = res
    })
}

}
