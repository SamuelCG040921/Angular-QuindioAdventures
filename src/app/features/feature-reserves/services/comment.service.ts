import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { AuthService } from '../../feature-login/services/auth.service';
import { CommentData } from '../models/commentData.model';
import { CommentDataPlan } from '../models/commentDataPlan.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:10101/crearOpinionChalet';
  private apiUrl2 = 'http://localhost:10101/getOpinionChalet';
  private apiUrl3 = 'http://localhost:10101/crearOpinionPlan'
  private apiUrl4 = 'http://localhost:10101/getOpinionPlan';

  constructor(private http: HttpClient, private authService: AuthService) { }

  createComment(commentData: any): Observable<any>{
    console.log(commentData, "exito");
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(this.apiUrl, commentData, { headers });
  }

  createCommentPlan(commentDataPlan: any): Observable<any>{
    console.log(commentDataPlan, "exito");
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post<any>(this.apiUrl3, commentDataPlan, { headers })
  }

  getChaletsComments(id: any): Promise<CommentData[]>{
    return axios.get(`${this.apiUrl2}/${id}`)
    .then(response => {
      const data = response.data;
      console.log(data);
      const comments: CommentData[] = data.map((comment: any) => new CommentData(
        comment.id_opinion,
        comment.email_usuario,
        comment.id_chalet_usuario,
        comment.opinion,
        comment.fechaCreacion,
        comment.hora,
        comment.calificacion,
        comment.nombres,
        comment.apellidos,
        comment.image
      ));
      return comments
    })
    .catch(error => {
      throw error;
    })
  }

  getPlansComments(id: any): Promise<CommentDataPlan[]>{
    return axios.get(`${this.apiUrl4}/${id}`)
    .then(response => {
      const data = response.data;
      console.log(data);
      const comments: CommentDataPlan[] = data.map((comment:any) => new CommentDataPlan(
        comment.id_opinion,
        comment.email_usuario,
        comment.id_planV_usuario,
        comment.opinion,
        comment.fechaCreacion,
        comment.hora,
        comment.calificacion,
        comment.nombres,
        comment.apellidos,
        comment.image
      ));
      return comments
    })
    .catch(error => {
      throw error;
    })
  }
}
