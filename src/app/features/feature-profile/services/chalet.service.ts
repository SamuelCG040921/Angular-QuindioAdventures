import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChaletService {
  private apiUrl = 'http://localhost:10101/api/images'; // Cambia esto por la URL de tu back-end

  constructor(private http: HttpClient) {}

  // Método para cargar archivos
  uploadFiles(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.apiUrl}/upload`, formData);
  }

  // Método para obtener un usuario por ID
  getUserbyID(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user`);
  }
}
