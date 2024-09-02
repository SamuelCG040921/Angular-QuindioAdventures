import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private apiUrl = 'http://localhost:10101/chatbot';

  constructor(private http: HttpClient) { }

  sendMessage(messageSend: string){
    console.log(messageSend, "exitoso en el mensaje");
    
    // Asegúrate de enviar un objeto con la propiedad "question"
    const data = {
      question: messageSend
    };

    return axios.post(this.apiUrl, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
  }
}
