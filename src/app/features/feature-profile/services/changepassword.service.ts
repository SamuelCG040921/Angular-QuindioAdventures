import { Injectable } from '@angular/core';
import { ChangePassword } from '../models/change-password.model';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Change } from '../../feature-login/models/change';


@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  private apiUrl = 'http://localhost:10101/reestablecer'; // URL del endpoint para restablecer la contraseña
  private apiUrl2 = 'http://localhost:10101/envioCorreoCambioContrasena'; // URL del endpoint para solicitar el restablecimiento

  constructor(private http: HttpClient) {}

  async change(newPassword: ChangePassword, token: string) {
    try {
      const headers = {
        'Authorization': `Bearer ${token}`, // Incluye el token en los headers
      };

      console.log('Enviando datos de usuario al backend:', newPassword, token);
      
      // Realiza la solicitud PUT para cambiar la contraseña
      const response = await axios.put(this.apiUrl, newPassword, { headers });
    
      console.log('Respuesta del backend:', response.data);

      return response.data; // Devuelve los datos de respuesta si es necesario
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
      throw error;
    }
  }

  // Método para solicitar el restablecimiento de contraseña
  solicitarRestablecimiento(newChange: Change) {
    return axios.post(this.apiUrl2, newChange);
  }

  getEmailFromToken(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const payloadBase64 = token.split('.')[1];
      const payload = atob(payloadBase64); // Decodifica Base64
      const parsedPayload = JSON.parse(payload); // Parsea el JSON
      return parsedPayload.email; // Obtiene el email del payload
    }
    return null;
  }

  solicitarRestablecimientoAutenticado() {
    const email = this.getEmailFromToken();
    if (email) {
      return axios.post(this.apiUrl2, { email });
    } else {
      throw new Error('No se pudo obtener el email del token');
    }
  }
  
}
