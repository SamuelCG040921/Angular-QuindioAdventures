import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservesService {
  
  private reservesUrl = 'http://localhost:8000/reserves';

  constructor(private http: HttpClient) { }

  getReserves(){
    return this.http.get('http://localhost:8000/reserves')
  }

  createReservation(reserva: any){
    return this.http.post('http://localhost:8000/reserves', reserva)
  }
}