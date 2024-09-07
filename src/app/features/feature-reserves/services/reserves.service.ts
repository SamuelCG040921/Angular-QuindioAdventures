import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservesService {

  private apiUrl = 'http://localhost:10101/reserva';
  private apiUrl2 = 'http://localhost:10101/reservaPlan';
  private apiUrl3 = 'http://localhost:10101/api';
  private apiUrl4 = 'http://localhost:10101/getReservasChalet';

  constructor(private http: HttpClient) {}

  // Método para enviar una reserva
  enviarReserva(data: any): Observable<any> {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Incluir el token en los headers
    });

    return this.http.post<any>(this.apiUrl, data, { headers });
  }

  // Método para enviar una reserva de plan
  enviarReservaPlan(data: any): Observable<any> {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Incluir el token en los headers
    });

    return this.http.post<any>(this.apiUrl2, data, { headers });
  }

  // Método para crear una orden
  createOrder(precioTotal: number, tipoReserva: string): Observable<any> {
    const data = { precioTotal, tipoReserva };
    return this.http.post<any>(`${this.apiUrl3}/create-order`, data);
  }

  // Método para obtener reservas por email
  getReservasByEmail(): Observable<any> {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Incluir el token en los headers
    });

    return this.http.post<any>(this.apiUrl4, {}, { headers }); // Enviar la solicitud con los headers
  }
}
