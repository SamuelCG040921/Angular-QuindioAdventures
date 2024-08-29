import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../feature-login/services/auth.service';
import axios from 'axios';
import { PlansDetails } from '../../feature-reserves/models/plans.model';
import { PlanInfo } from '../../feature-reserves/models/plansById';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  private apiRegisterPlanUrl = 'http://localhost:10101/createPlan';
  private apiUrl = 'http://localhost:10101/plan'
  private apiUlr2 = 'http://localhost:10101/planId'

  constructor(private http: HttpClient, private authService: AuthService) { }

  registrarPlan(planData: any): Observable<any> {
    console.log(planData,"exito");
    const token = this.authService.getToken(); // Obtén el token de tu servicio de autenticación
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(this.apiRegisterPlanUrl, planData, { headers });
  }

  getPlansConnection(): Promise<PlansDetails[]> {

    return axios.get(this.apiUrl)
      .then(response => {
        const data = response.data;
        
        // Si `data` es un array de chalets, mapea cada elemento a un `ChaletDetails`
        const plans: PlansDetails[] = data.map((plan: any) => new PlansDetails(
          plan.id_planV,
          plan.nombre_planV,
          plan.municipio_planV,
          plan.ubicacion_planV,
          plan.descripcion,
          plan.imagen_principal,
          plan.tarifas
        ));
        
        return plans;
      })
      .catch(error => {
        throw error;
      });
  }

  getPlanById(id:string): Promise<PlanInfo>{
    return axios.get(`${this.apiUlr2}/planes/${id}`)
    .then(response=> {
      const data = response.data;
      const plan = new PlanInfo(
        data[0].id_planV,
        data[0].nombre_planV,
        data[0].municipio_planV,
        data[0].ubicacion_planV,
        data[0].descripcion,
        JSON.parse(data[0].imagenes),
        JSON.parse(data[0].tarifas)
      );
      console.log(plan)
      return plan
    })
    .catch(error =>{
      throw error;
    })
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }


}
