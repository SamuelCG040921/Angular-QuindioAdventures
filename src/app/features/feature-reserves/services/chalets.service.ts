import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { ChaletDetails } from '../models/chalets.model';
import { ChaletInfo } from '../models/chaletsById';
import { ChaletsInfoPerfil } from '../models/chaletsInfoPerfil';
import { AuthService } from '../../feature-login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChaletsService {

  private apiUrl = 'http://localhost:10101/chalet';
  private apiUrl2 = 'http://localhost:10101/api';
  private apiUrl3 = 'http://localhost:10101/chaletEmail';
  private apiUrl4 = 'http://localhost:10101/eliminarChalet';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getChaletsConnection(): Promise<ChaletDetails[]> {
    return axios.get(this.apiUrl)
      .then(response => {
        const data = response.data;
        const chalets: ChaletDetails[] = data.map((chalet: any) => new ChaletDetails(
          chalet.id_chalet,
          chalet.nombre_chalet,
          chalet.municipio_chalet,
          chalet.ubicacion_chalet,
          chalet.caracteristicas,
          chalet.imagen_principal,
          chalet.tarifa,
          chalet.servicio
        ));
        return chalets;
      })
      .catch(error => {
        throw error;
      });
  }

  getChaletById(id: string): Promise<ChaletInfo> {
    return axios.get(`${this.apiUrl2}/chalets/${id}`)
      .then(response => {
        const data = response.data;
        const chalet = new ChaletInfo(
          data[0].id_chalet,
          data[0].nombre_chalet,
          data[0].municipio_chalet,
          data[0].ubicacion_chalet,
          data[0].caracteristicas,
          JSON.parse(data[0].imagenes),
          JSON.parse(data[0].tarifas),
          JSON.parse(data[0].servicios)
        );
        return chalet;
      })
      .catch(error => {
        throw error;
      });
  }

  getChaletsByEmail(): Promise<ChaletsInfoPerfil[]> {
    const token = localStorage.getItem('token');

    return axios.get(`${this.apiUrl3}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      const chalets = response.data.map((data: any) => new ChaletsInfoPerfil(
        data.id_chalet,
        data.nombre_chalet,
        data.municipio_chalet,
        data.ubicacion_chalet,
        data.caracteristicas,
        data.fecha_registro,
        JSON.parse(data.imagenes),
        JSON.parse(data.tarifas),
        JSON.parse(data.servicios)
      ));
      return chalets;
    })
    .catch(error => {
      throw error;
    });
  }

  eliminarChalet(id: number): Promise<any> {
    const token = this.authService.getToken(); // Obtén el token de tu servicio de autenticación
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { id }; // El backend espera un objeto con `id` en el cuerpo de la solicitud

    return this.http.put<any>(`${this.apiUrl4}`, body, { headers }).toPromise();
  }
}
