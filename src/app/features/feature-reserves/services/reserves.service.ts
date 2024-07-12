import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Reserva } from '../models/reserva.model';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ReservesService {
  private apiUrl = 'http://localhost:10101/reserva'; // Asegúrate de que esta URL sea correcta

  constructor() {}
  registerReserva(newReserva: Reserva) {
    console.log('Sending user data to backend:', newReserva);

    return axios.post(this.apiUrl, newReserva)
      .then(response => {
        console.log('Backend response:', response.data);
        return response.data; // Puedes devolver los datos de respuesta si es necesario
      })
      .catch(error => {
        console.error('Error registering user:', error);
        throw error;
      });
  }
}