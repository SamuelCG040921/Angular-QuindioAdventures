import { Injectable } from '@angular/core';
import { ChangePassword } from '../models/change-password.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  private apiUrl = 'http://localhost:10101/reestablecer'; // URL del endpoint

  constructor() {}

  async change(newPassword: ChangePassword) {
    try {
      const token = this.getToken();
      const headers = {
        'Authorization': `Bearer ${token}`
      };

      console.log('Sending user data to backend:', newPassword,token);

      const response = await axios.put(this.apiUrl, newPassword, { headers });

      console.log('Backend response:', response.data);

      return response.data; // Puedes devolver los datos de respuesta si es necesario
    } catch (error) {
      console.error('Error changing password:', error);
      throw error;
    }
  }

  // Método para obtener el token desde el localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
