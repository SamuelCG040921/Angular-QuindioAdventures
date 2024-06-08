import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private http:HttpClient) { }

  getPlans(){
    return this.http.get('http://localhost:8000/planes')
  }
}
