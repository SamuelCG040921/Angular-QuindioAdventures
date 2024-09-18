import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReservaEmail } from '../models/reserveEmail.model';
import axios, { AxiosHeaders } from 'axios';
import { ReservaPlanInfo } from '../models/reservePlan.model';

@Injectable({
  providedIn: 'root'
})
export class ReservesService {

  private apiUrl = 'http://localhost:10101/reserva';
  private apiUrl2 = 'http://localhost:10101/reservaPlan';
  private apiUrl3 = 'http://localhost:10101/api';
  private apiUrl4 = 'http://localhost:10101/getReservasChalet';
  private apiUrl5 = 'http://localhost:10101/getReservasPlan';
  private apiUrl6 = 'http://localhost:10101/getReservasMiChalet';
  private apiUrl7 = 'http://localhost:10101/getReservasMiPlan'
  private apiUrl8 = 'http://localhost:10101/cancelarReserva'
  private apiUrl9 = 'http://localhost:10101/cancelarReservaPlan'
  private apiUrl10 = 'http://localhost:10101/activarReserva'
  private apiUrl11 = 'http://localhost:10101/activarReservaPlan'
  private apiUrl12 = 'http://localhost:10101/getFechasOcupadasChalet'
  private apiUrl13 = 'http://localhost:10101/getFechasOcupadasPlan'

  constructor(private http: HttpClient) {}

  enviarReserva(data: any): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(this.apiUrl, data, { headers });
  }

  enviarReservaPlan(data: any): Observable<any> {
    const token = localStorage.getItem('token'); 

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(this.apiUrl2, data, { headers });
  }

  // Método para crear una orden
  createOrder(precioTotal: number, tipoReserva: string): Observable<any> {
    const data = { precioTotal, tipoReserva };
    return this.http.post<any>(`${this.apiUrl3}/create-order`, data);
  }


  getReservasByEmail(): Promise<ReservaEmail[]> {
    const token = localStorage.getItem('token'); 

    const headers = new AxiosHeaders({
      'Authorization': `Bearer ${token}`
    });

    return axios.get(this.apiUrl4, {headers})
      .then(response => {
        const data = response.data[0];
        console.log(data)
        const reserves: ReservaEmail[] = data.map((reserve: any) => new ReservaEmail(
          reserve.id_reserva,
          reserve.id_chalet_usuario,
          reserve.email_usuario,
          reserve.documento,
          reserve.cantPersonas,
          reserve.nombre,
          reserve.apellido,
          reserve.telefono,
          reserve.direccion,
          reserve.precioFinal,
          reserve.estancia,
          reserve.fechaInicio,
          reserve.fechaFin,
          reserve.fechaRegistro,
          reserve.tarifa,
          reserve.estado
        ));

        return reserves;
      })
      .catch(error => {
        throw error;
      });
  }

  getReservasPlanByEmail(): Promise<ReservaPlanInfo[]>{
    const token = localStorage.getItem('token');

    const headers = new AxiosHeaders({
      'Authorization': `Bearer ${token}`
    });

    return axios.get(this.apiUrl5, {headers})
    .then(response => {
      const data = response.data[0];
      const reserves: ReservaPlanInfo[] = data.map((reserve:any) => new ReservaPlanInfo(
        reserve.id_reserva,
        reserve.id_planV_usuario,
        reserve.email_usuario,
        reserve.documento,
        reserve.cantPersonas,
        reserve.nombre,
        reserve.apellido,
        reserve.telefono,
        reserve.direccion,
        reserve.precioFinal,
        reserve.fecha,
        reserve.fechaRegistro,
        reserve.tarifa,
        reserve.estado
      ));
      return reserves;
    })
    .catch(error =>{
      throw error;
    })
  }

  getReservesOfMyChalets(): Promise<ReservaEmail[]>{
    const token = localStorage.getItem('token');

    const headers = new AxiosHeaders({
      'Authorization': `Bearer ${token}`
    });

    return axios.get(this.apiUrl6, {headers})
    .then(response => {
      const data = response.data[0];
      const reserves: ReservaEmail[] = data.map((reserve:any) => new ReservaEmail(
        reserve.id_reserva,
          reserve.id_chalet_usuario,
          reserve.email_usuario,
          reserve.documento,
          reserve.cantPersonas,
          reserve.nombre,
          reserve.apellido,
          reserve.telefono,
          reserve.direccion,
          reserve.precioFinal,
          reserve.estancia,
          reserve.fechaInicio,
          reserve.fechaFin,
          reserve.fechaRegistro,
          reserve.tarifa,
          reserve.estado
      ));
      return reserves;
    })
    .catch(error =>{
      throw error
    })
  }

  getReservesOfMyPlans(): Promise<ReservaPlanInfo[]>{
    const token = localStorage.getItem('token');

    const headers = new AxiosHeaders({
      'Authorization': `Bearer ${token}`
    })

    return axios.get(this.apiUrl7, {headers})
    .then(response => {
      const data = response.data[0];
      const reserves: ReservaPlanInfo[] = data.map((reserve:any) => new ReservaPlanInfo(
        reserve.id_reserva,
        reserve.id_planV_usuario,
        reserve.email_usuario,
        reserve.documento,
        reserve.cantPersonas,
        reserve.nombre,
        reserve.apellido,
        reserve.telefono,
        reserve.direccion,
        reserve.precioFinal,
        reserve.fecha,
        reserve.fechaRegistro,
        reserve.tarifa,
        reserve.estado
      ))
      return reserves
    })
    .catch(error => {
      throw error
    })
  }

  cancelarReserva(idReserva: number): Promise<any> {
    return axios.put(`${this.apiUrl8}/${idReserva}`)
      .then(response => {
        console.log("Reserva cancelada con éxito", response.data);
        return response.data;
      })
      .catch(error => {
        console.error("Error al cancelar la reserva", error);
        throw error;
      });
  }

  cancelarReservaPlan(idReserva: number): Promise<any> {
    return axios.put(`${this.apiUrl9}/${idReserva}`)
      .then(response => {
        console.log("Reserva cancelada con éxito", response.data);
        return response.data;
      })
      .catch(error => {
        console.error("Error al cancelar la reserva", error);
        throw error;
      });
  }

  activarReserva(idReserva: number): Promise<any> {
    return axios.put(`${this.apiUrl10}/${idReserva}`)
      .then(response => {
        console.log("Reserva cancelada con éxito", response.data);
        return response.data;
      })
      .catch(error => {
        console.error("Error al cancelar la reserva", error);
        throw error;
      });
  }

  activarReservaPlan(idReserva: number): Promise<any> {
    return axios.put(`${this.apiUrl11}/${idReserva}`)
      .then(response => {
        console.log("Reserva cancelada con éxito", response.data);
        return response.data;
      })
      .catch(error => {
        console.error("Error al cancelar la reserva", error);
        throw error;
      });
  }

  getFechasOcupadasChalet(idChalet: number): Promise<any> {
    return axios.get(`${this.apiUrl12}/${idChalet}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error al obtener fechas ocupadas', error);
        throw error;
      });
  }

  getFechasOcupadasPlan(idPlan: number): Promise<any> {
    return axios.get(`${this.apiUrl13}/${idPlan}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error al obtener fechas ocupadas', error);
        throw error;
      });
  }
}