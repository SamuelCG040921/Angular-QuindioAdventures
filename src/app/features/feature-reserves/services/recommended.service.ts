import { Injectable } from '@angular/core';
import { ChaletDetails } from '../models/chalets.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RecommendedService {
  private apiUrl = 'http://localhost:10101/recommended';

  constructor() { }

  getRecommendedConnection(): Promise<ChaletDetails[]> {
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
        console.log(chalets,1234567);
        
        return chalets;
      })
      .catch(error => {
        throw error;
      });
  }
}
