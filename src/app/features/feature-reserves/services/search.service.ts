import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:10101/search'

  constructor(private http: HttpClient) { }

  getSearchResults(query: string): Promise<any>{
    return axios.get(`${this.apiUrl}?q=${query}`)
  }
}
