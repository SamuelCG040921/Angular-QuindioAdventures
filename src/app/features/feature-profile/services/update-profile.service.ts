import { Injectable } from '@angular/core';
import axios from 'axios';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private apiUrl = 'http://localhost:10101/updateProfile';

  constructor() {}

  async updateUserProfile(userData: any): Promise<any> {
    try {
      const response = await axios.put(`${this.apiUrl}`, userData, {
        headers: {
          'Authorization': `Bearer ${this.getToken()}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      throw error;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private imageUrlUpdatedSource = new Subject<string>();
  imageUrlUpdated$ = this.imageUrlUpdatedSource.asObservable();

  emitImageUrl(imageUrl: string) {
    this.imageUrlUpdatedSource.next(imageUrl);
  }
}