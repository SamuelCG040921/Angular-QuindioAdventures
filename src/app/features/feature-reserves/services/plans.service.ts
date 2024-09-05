import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { PlansDetails } from '../models/plans.model'; // Importa el modelo adecuado
import { PlanInfo } from '../models/plansById'; // Importa el modelo adecuado
import { PlansInfoPerfil } from '../models/plansInfoPerfil'; // Importa el modelo adecuado
import { AuthService } from '../../feature-login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  private apiUrl = 'http://localhost:10101/plan';
  private apiUrl2 = 'http://localhost:10101/planId';
  private apiUrl3 = 'http://localhost:10101/planEmail';
  private apiUrl4 = 'http://localhost:10101/eliminarPlan';
  private apiUrl5 = 'http://localhost:10101/activarPlan'
  private apiUrl6 = 'http://localhost:10101/planesAdmin'

  constructor(private http: HttpClient, private authService: AuthService) {}

  getPlansConnection(): Promise<PlansDetails[]> {
    return axios.get(this.apiUrl)
      .then(response => {
        const data = response.data;
        const plans: PlansDetails[] = data.map((plan: any) => new PlansDetails(
          plan.id_plan,
          plan.nombre_plan,
          plan.municipio_plan,
          plan.ubicacion_plan,
          plan.caracteristicas,
          plan.imagen_principal,
          plan.tarifa,
        ));
        return plans;
      })
      .catch(error => {
        throw error;
      });
  }

  getPlanesConnectionAdmin(): Promise<PlansDetails[]> {
    return axios.get(this.apiUrl6)
      .then(response => {
        // Elimina o comenta este console.log si no necesitas el log aquí
        // console.log('Datos recibidos:', response.data);
        const data = response.data;
        const planes: PlansDetails[] = data.map((plan: any) => new PlansDetails(
          plan.id_planV,
          plan.nombre_planV,
          plan.municipio_planV,
          plan.ubicacion_planV,
          plan.descripcion,
          plan.imagen_principal,
          plan.tarifas
        ));
        return planes;
      })
      .catch(error => {
        throw error;
      });
  }

  getPlanById(id: string): Promise<PlanInfo> {
    return axios.get(`${this.apiUrl2}/planes/${id}`)
      .then(response => {
        const data = response.data;
        const plan = new PlanInfo(
          data[0].id_planV,
          data[0].nombre_planV,
          data[0].municipio_planV,
          data[0].ubicacion_planV,
          data[0].descripcion,
          JSON.parse(data[0].imagenes),
          JSON.parse(data[0].tarifas),
      
        );
        return plan;
      })
      .catch(error => {
        throw error;
      });
  }

  getPlansByEmail(): Promise<PlansInfoPerfil[]> {
    const token = localStorage.getItem('token');

    return axios.get(`${this.apiUrl3}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      const plans = response.data.map((data: any) => new PlansInfoPerfil(
        data.id_plan,
        data.nombre_plan,
        data.municipio_plan,
        data.ubicacion_plan,
        data.caracteristicas,
        data.fecha_registro,
        JSON.parse(data.imagenes),
        JSON.parse(data.tarifas),
      ));
      return plans;
    })
    .catch(error => {
      throw error;
    });
  }

  eliminarPlan(id: number): Promise<any> {
    const token = this.authService.getToken(); // Obtén el token de tu servicio de autenticación
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { id }; // El backend espera un objeto con `id` en el cuerpo de la solicitud

    return this.http.put<any>(`${this.apiUrl4}`, body, { headers }).toPromise();
  }

  activarPlan(id: string): Promise<any> {
    const token = this.authService.getToken(); // Obtén el token de tu servicio de autenticación
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { id }; 

    return this.http.put<any>(`${this.apiUrl5}`, body, { headers }).toPromise();
  }

  desactivarPlan(id: string): Promise<any> {
    const token = this.authService.getToken(); // Obtén el token de tu servicio de autenticación
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { id }; // El backend espera un objeto con id en el cuerpo de la solicitud

    return this.http.put<any>(`${this.apiUrl4}`, body, { headers }).toPromise();
  }
}
