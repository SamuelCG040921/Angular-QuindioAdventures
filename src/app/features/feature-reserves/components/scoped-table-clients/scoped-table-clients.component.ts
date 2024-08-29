import { Component, Input, OnInit } from '@angular/core';
import { ReservesService } from '../../services/reserves.service';

@Component({
  selector: 'app-scoped-table-clients',
  templateUrl: './scoped-table-clients.component.html',
  styleUrl: './scoped-table-clients.component.scss'
}) 

    
export class ScopedTableClientsComponent{
reserves: any

constructor(private reservesService:ReservesService){}

}
