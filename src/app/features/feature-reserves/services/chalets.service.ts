import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { ChaletDetails } from '../models/chalets.model';
import { ChaletInfo } from '../models/chaletsById';
import { ChaletsInfoPerfil } from '../models/chaletsInfoPerfil';

@Injectable({
  providedIn: 'root'
})
export class ChaletsService {

  private apiUrl = 'http://localhost:10101/chalet';
  private apiUrl2 = 'http://localhost:10101/api';
  private apiUrl3 = 'http://localhost:10101/chaletEmail';

  constructor(private http: HttpClient) {}

  getChaletsConnection(): Promise<ChaletDetails[]> {

    return axios.get(this.apiUrl)
      .then(response => {
        const data = response.data;
        
        // Si `data` es un array de chalets, mapea cada elemento a un `ChaletDetails`
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
          JSON.parse(data[0].imagenes), // Aquí convertimos el JSON a objeto
          JSON.parse(data[0].tarifas),  // Convertimos el JSON a objeto si es necesario
          JSON.parse(data[0].servicios) // Convertimos el JSON a objeto si es necesario
        );
        return chalet;
      })
      .catch(error => {
        throw error;
      });
  }

  getChaletsByEmail(): Promise<ChaletsInfoPerfil[]> {
    // Obtén el token desde el localStorage
    const token = localStorage.getItem('token'); // Asegúrate de usar la clave correcta

    return axios.get(`${this.apiUrl3}`, {
      headers: {
        'Authorization': `Bearer ${token}`, // Envía el token en los encabezados
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
        JSON.parse(data.imagenes), // Convertimos el JSON a objeto
        JSON.parse(data.tarifas),  // Convertimos el JSON a objeto si es necesario
        JSON.parse(data.servicios) // Convertimos el JSON a objeto si es necesario
      ));
      console.log(chalets,2345);
      
      return chalets; // Devuelve un arreglo
    })
    .catch(error => {
      throw error;
    });
}


  getChalets() {
    return this.http.get('http://localhost:8000/chalets');
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

}
