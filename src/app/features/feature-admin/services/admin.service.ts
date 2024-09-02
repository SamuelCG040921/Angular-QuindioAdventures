// admin.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private activarUrl = 'http://localhost:10101/activarUsuario';
  private desactivarUrl = 'http://localhost:10101/desactivarUsuario'; // URL para desactivar

  constructor() { }

  async activarUsuario(email: string): Promise<void> {
    try {
      // Obtener el token del localStorage
      const token = localStorage.getItem('token');

      // Configurar los headers con el token
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      // Hacer la solicitud PUT con el token en los headers
      await axios.put(this.activarUrl, { email }, config);
    } catch (error) {
      console.error('Error activando el usuario:', error);
      throw error; // Propagar el error para manejarlo en el componente
    }
  }

  async desactivarUsuario(email: string): Promise<void> {
    try {
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      await axios.put(this.desactivarUrl, { email }, config);
    } catch (error) {
      console.error('Error desactivando el usuario:', error);
      throw error;
    }
  }
}
