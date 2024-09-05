import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReservesService {
  createReservation(reserva: any) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:10101/reserva';
  private apiUrl2 = 'http://localhost:10101/reservaPlan';

  constructor(private http: HttpClient) {}

  enviarReserva(data: any): Observable<any> {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Incluir el token en los headers
    });

    return this.http.post<any>(this.apiUrl, data, { headers });
  }

  enviarReservaPlan(data: any): Observable<any> {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Incluir el token en los headers
    });

    return this.http.post<any>(this.apiUrl2, data, { headers });
  }
}
