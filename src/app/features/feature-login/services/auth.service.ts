import { Injectable } from '@angular/core';
import axios from 'axios';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:10101/auth'; // Asegúrate de que esta URL sea correcta

  constructor() {}

  register(newUser: Auth) {
    console.log('Sending user data to backend:', newUser);

    return axios.post(this.apiUrl, newUser)
      .then(response => {
        console.log('Backend response:', response.data);

        // Verifica si la respuesta contiene un token
        if (response.data && response.data.token) {
          // Guarda el token en localStorage
          localStorage.setItem('token', response.data.token);
        }

        return response.data; // Puedes devolver los datos de respuesta si es necesario
      })
      .catch(error => {
        console.error('Error registering user:', error);
        throw error;
      });
  }

  // Método para obtener el token desde el localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
  }
}
