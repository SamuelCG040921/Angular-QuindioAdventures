import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  

  constructor(private http: HttpClient) {
    
  }
  getUsers(){
    return this.http.get('http://localhost:8000/users');
  }

  getUserbyID(){
    return this.http.get('http://localhost:8000/users')
    .pipe(
      map((data: any) => {
        const users = data;
        const activeUserDocument = "1092852128";
        return users.find((user: { documento: string; }) => user.documento === activeUserDocument);
      })
    );


  }
}
