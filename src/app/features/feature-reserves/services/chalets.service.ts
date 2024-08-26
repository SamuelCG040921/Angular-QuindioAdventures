import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { ChaletDetails } from '../models/chalets.model';
import { map, Observable } from 'rxjs';
import { ChaletInfo } from '../models/chaletsById';

@Injectable({
  providedIn: 'root'
})
export class ChaletsService {

  private apiUrl = 'http://localhost:10101/chalet';
  private apiUrl2 = 'http://localhost:10101/api';

  constructor(private http: HttpClient) {}

  getChaletsConnection(): Promise<ChaletDetails[]> {

    return axios.get(this.apiUrl)
      .then(response => {
        const data = response.data;
        
        // Si `data` es un array de chalets, mapea cada elemento a un `ChaletDetails`
        const chalets: ChaletDetails[] = data.map((chalet: any) => new ChaletDetails(
          chalet.id_chalet,
          chalet.nombre_chalet,
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


  getChalets() {
    return this.http.get('http://localhost:8000/chalets');
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

}
