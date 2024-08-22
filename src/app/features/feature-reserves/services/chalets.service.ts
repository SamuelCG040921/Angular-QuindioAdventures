import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { ChaletDetails } from '../models/chalets.model';

@Injectable({
  providedIn: 'root'
})
export class ChaletsService {

  private apiUrl = 'http://localhost:10101/chalet';

  constructor(private http: HttpClient) {}

  getChaletsConnection(): Promise<ChaletDetails[]> {
    console.log(234567898765432);
    
    return axios.get(this.apiUrl)
      .then(response => {
        const data = response.data;
        
        // Si `data` es un array de chalets, mapea cada elemento a un `ChaletDetails`
        const chalets: ChaletDetails[] = data.map((chalet: any) => new ChaletDetails(
          chalet.nombre_chalet,
          chalet.ubicacion_chalet,
          chalet.caracteristicas,
          chalet.imagen_principal,
          chalet.tarifas,
          chalet.servicios
        ));
        
        return chalets;
      })
      .catch(error => {
        throw error;
      });
  }

  getChalets() {
    return this.http.get('http://localhost:8000/chalets');
  }
}
