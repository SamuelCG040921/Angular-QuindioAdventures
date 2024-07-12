import { Component, OnInit } from '@angular/core';
import { ReservesService } from '../../services/reserves.service';

@Component({
  selector: 'app-page-reserves-reserves',
  templateUrl: './page-reserves-reserves.component.html',
  styleUrl: './page-reserves-reserves.component.scss'
})
export class PageReservesReservesComponent{
  reserves: any

constructor(private reservesService:ReservesService){}

  }
  

