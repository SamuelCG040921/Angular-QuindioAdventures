import { Injectable } from '@angular/core';
import axios from 'axios'
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:10101/register'; // Asegúrate de que esta URL sea correcta

  constructor() {}
  register(newUser: User) {
    console.log('Sending user data to backend:', newUser);

    return axios.post(this.apiUrl, newUser)
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
