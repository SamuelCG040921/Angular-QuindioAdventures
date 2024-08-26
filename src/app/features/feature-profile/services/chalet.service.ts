import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';
import { AuthService } from '../../feature-login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChaletService {
  private apiUrl = 'http://localhost:10101/api/images';
  private apiRegisterChaletUrl = 'http://localhost:10101/createChalet';

  constructor(private http: HttpClient, private authService: AuthService) {}

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

  registrarChalet(chaletData: any): Observable<any> {
    console.log(chaletData,"exito");
    const token = this.authService.getToken(); // Obtén el token de tu servicio de autenticación
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(this.apiRegisterChaletUrl, chaletData, { headers });
  }

  // Método para obtener el token del localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
