import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

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

  
  getReservebyCode(codigo:any){
    return this.http.get('http://localhost:8000/reserves')
    .pipe(
      map((data: any) => {
        const reserves = data;
        const activeUserDocument = 33;
        return reserves.find((reserve: { codigo: number; }) => reserve.codigo === activeUserDocument);
      })
    );


}
}