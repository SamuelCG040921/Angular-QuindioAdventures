import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {
  private tarifaSeleccionada: any | null = null;
  private apiUrl = 'http://localhost:10101/temporadas';
  private apiUrl2 = 'http://localhost:10101/temporadasPlan';

  constructor(private http: HttpClient) {}

  setTarifaSeleccionada(tarifa: any): void {
    this.tarifaSeleccionada = tarifa;
  }

  getTarifaSeleccionada(): any | null {
    return this.tarifaSeleccionada;
  }

  getTarifasPorFecha(idChalet: number, fechaInicio: string): Observable<any> {
    const url = `${this.apiUrl}`; // Asegúrate de que esta URL coincida con tu ruta en el backend
    return this.http.post<any[]>(url, { idChalet, fechaInicio });
  }

  getTarifasPorFechaPlan(idPlan: number, fechaPlan: string): Observable<any> {
    const url = `${this.apiUrl2}`;
    console.log({idPlan, fechaPlan}, 5678); // Verifica que los datos se estén enviando correctamente
    return this.http.post<any[]>(url, { idPlan, fechaPlan });
  }
  
}
