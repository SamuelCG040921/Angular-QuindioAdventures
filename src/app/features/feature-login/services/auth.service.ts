import { Injectable } from '@angular/core';
import axios from 'axios';
import { Auth } from '../models/auth.model';
import { UserProfile } from '../../feature-profile/models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrlAdmin = 'http://localhost:10101/authAdmin' 
  private apiUrl = 'http://localhost:10101/auth';
  private profileUrl = 'http://localhost:10101/user';
  private apiUsers = 'http://localhost:10101/usuarios';

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

  authAdmin(newUser: Auth) {
    return axios.post(this.apiUrlAdmin, newUser)
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

  private isTokenExpired(token: string): boolean {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime;
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    if (token && this.isTokenExpired(token)) {
      this.logout(); // Elimina el token expirado
      return null;
    }
    return token;
  }

  estaActivo(): boolean {
    const token = this.getToken();
    return token !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getUserProfile(): Promise<UserProfile> {
    const token = this.getToken();
    if (!token) {
      return Promise.reject('Token expirado o no disponible');
    }

    return axios.get(this.profileUrl, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      const data = response.data;
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
      return user;
    })
    .catch(error => {
      throw error;
    });
  }

  getUserEmail(): Promise<string | null> {
    return this.getUserProfile()
      .then(profile => profile.email)
      .catch(() => null);
  }


  getUsersConnection(): Promise<UserProfile[]>{
    return axios.get(this.apiUsers)
    .then(response => {
      const data = response.data;
      console.log(data, 333)
      const users: UserProfile[] = data.map((user:any) => new UserProfile(
        user.documento,
        user.email,
        user.password,
        user.nombres,
        user.apellidos,
        user.edad,
        user.image,
        user.telefono,
        user.direccion
      ));
      return users;
    })
    .catch(error => {
      throw error
    })
  }
}
