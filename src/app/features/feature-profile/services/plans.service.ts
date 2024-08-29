import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../feature-login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  private apiRegisterPlanUrl = 'http://localhost:10101/createPlan';

  constructor(private http: HttpClient, private authService: AuthService) { }

  registrarPlan(planData: any): Observable<any> {
    console.log(planData,"exito");
    const token = this.authService.getToken(); // Obtén el token de tu servicio de autenticación
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(this.apiRegisterPlanUrl, planData, { headers });
  }
}
