import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChaletIdService {
  private chaletIdSubject = new BehaviorSubject<string | null>(null);
  chaletId$ = this.chaletIdSubject.asObservable();
  private tarifaSeleccionada: any | null = null

  setChaletId(id: string): void {
    this.chaletIdSubject.next(id);
  }

  getChaletId(): string | null {
    return this.chaletIdSubject.getValue();
  }
}
