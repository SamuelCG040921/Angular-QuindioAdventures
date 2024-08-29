import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanIdService {
  private planIdSubject = new BehaviorSubject<string | null>(null);
  planVId$ = this.planIdSubject.asObservable();
  private tarifaSeleccionada: any | null = null

  setPlanId(id:string): void{
    this.planIdSubject.next(id);
  }

  getPlanId(): string | null {
    return this.planIdSubject.getValue();
  }
}
