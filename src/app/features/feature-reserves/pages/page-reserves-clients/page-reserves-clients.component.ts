import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';
import { ReservesService } from '../../services/reserves.service';

@Component({
  selector: 'app-page-reserves-clients',
  templateUrl: './page-reserves-clients.component.html',
  styleUrl: './page-reserves-clients.component.scss'
})
export class PageReservesClientsComponent implements OnInit{
  reserves: any

constructor(public authService:AuthService){}

ngOnInit(): void {
    this.reserves = []
}
  }
  

