import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservesService {
  
  private reservesUrl = 'http://localhost:8000/reserves';

  constructor(private http: HttpClient) { }

  getReserves(){
    return this.http.get('http://localhost:8000/reserves')
  }

  createReservation(reserva: any){
    return this.http.post('http://localhost:8000/reserves', reserva)
  }

  cancelReserve(codigo:any){
    const updatedReserve:any ={ "estado": "cancelada",
      "userimg": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg",
      "numero": 1,
      "codigo": 33,
      "tipo": "Chalet",
      "precio": 1300000,
      "check-in": "23-04-2024",
      "check-out": "25-04-2024",
      "direccion": "Barrio la calzada calle2 casa32",
      "telefono": "3053305459",
      "nombre": "Samuel Calderón",
      "fecharegistro": "24-08-2024",
      "documento": "1029384651",
      "cantidadNinos": 1,
      "cantidadAdultos": 2,
      "apellido": "Calderón",
      "correo": "samuelcalderon986@gmail.com",
      "paymentmethod": "nequi",
      "paymentmethodimg": "https://mir-s3-cdn-cf.behance.net/projects/404/43a39c151928953.Y3JvcCwxODQ0LDE0NDMsMzYsMA.png",
      "id": "1c79"}
    return this.http.put('http://localhost:8000/reserves/', codigo, updatedReserve)
  }
  getReservebyCode(codigo:any){
    return this.http.get('http://localhost:8000/reserves')
    .pipe(
      map((data: any) => {
        const reserves = data;
        const activeUserDocument = 33;
        return reserves.find((reserve: { codigo: number; }) => reserve.codigo === activeUserDocument);
      })
    );


}
}