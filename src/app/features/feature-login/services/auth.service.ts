import { Injectable } from '@angular/core';
import axios from 'axios';
import { Auth } from '../models/auth.model';
import { UserProfile } from '../../feature-profile/models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:10101/auth';
  private profileUrl = 'http://localhost:10101/user';

  constructor() {}

  auth(newUser: Auth) {
    return axios.post(this.apiUrl, newUser)
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

  estaActivo():any {
    let token = this.getToken();
    if(token === null){
      return false
    }else{
      return true
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getUserProfile(): Promise<UserProfile> {
    const token = this.getToken();
    return axios.get(this.profileUrl, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      const data = response.data;
      console.log(data);
      
      const user = new UserProfile(
        data.documento,
        data.email,
        data.password,
        data.nombres,
        data.apellidos,
        data.edad,
        data.image,
        data.numero_telefono,
        data.direccion_usuario
      ); 

      console.log(user);
      return user;
      
    })
    .catch(error => {
      throw error;
    });
  }
}