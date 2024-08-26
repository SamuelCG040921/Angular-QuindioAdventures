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
}
