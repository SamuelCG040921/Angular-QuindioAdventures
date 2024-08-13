import { Injectable } from '@angular/core';
import axios from 'axios';
import { UpdateProfile } from '../models/update-profile';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private apiUrl = 'http://localhost:10101/updateProfile';

  constructor() {}

  update(newUser: UpdateProfile) {
    const token = this.getToken();
    return axios.put(this.apiUrl, newUser, {
      headers: {
        'Authorization': `Bearer ${token}`,  // Agregar el token en el encabezado
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.data && response.data.token) {
          localStorage.setItem('token', response.data.token);
        }
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}