import { Injectable } from '@angular/core';
import axios from 'axios';
import { SearchResult } from '../../feature-profile/models/search-result.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:10101/search';  // Cambia esto por la URL de tu backend

  constructor() {}

  search(whatInput: string, whereInput: string): Promise<SearchResult[]> {
    return axios.post<SearchResult[]>(this.apiUrl, { whatInput, whereInput })
      .then(response => response.data)
      .catch(error => {
        console.error('Error en la búsqueda:', error);
        throw error;
      });
  }
}
