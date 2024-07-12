import { Injectable } from '@angular/core';
import { Reserva } from '../models/reserva.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ReservesService {
  private apiUrl = 'http://localhost:10101/reserva'; // Asegúrate de que esta URL sea correcta

  constructor() {}

  async registerReserva(newReserva: Reserva) {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    console.log('Sending reservation data to backend:', newReserva);

    try {
      const response = await axios.post(this.apiUrl, newReserva, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Backend response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error registering reservation:', error);
      throw error;
    }
  }
}
