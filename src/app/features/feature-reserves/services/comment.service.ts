import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../feature-login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:10101/crearOpinionChalet';
  constructor(private http: HttpClient, private authService: AuthService) { }

  createComment(commentData: any): Observable<any>{
    console.log(commentData, "exito");
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(this.apiUrl, commentData, { headers });
  }
}
