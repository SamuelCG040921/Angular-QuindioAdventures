import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private apiUrl = 'http://localhost:10101/updateProfile';
  private apiImagesUrl = 'http://localhost:10101/api/images';

  constructor(private http: HttpClient) {}

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

  // Método para cargar archivos
  uploadFiles(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.apiImagesUrl}/upload`, formData);
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