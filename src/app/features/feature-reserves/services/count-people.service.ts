import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountPeopleService {
  private totalPersonsSource: BehaviorSubject<number>;
  totalPersons$: any;

  constructor() {
    const storedCount = localStorage.getItem('totalPersons');
    const initialCount = storedCount ? parseInt(storedCount, 10) : 0;
    this.totalPersonsSource = new BehaviorSubject<number>(initialCount);

    // Mueve la inicialización de totalPersons$ aquí
    this.totalPersons$ = this.totalPersonsSource.asObservable();
  }

  setTotalPersons(count: number): void {
    this.totalPersonsSource.next(count);
    localStorage.setItem('totalPersons', count.toString());
  }

  clearTotalPersons(): void {
    this.totalPersonsSource.next(0);
    localStorage.removeItem('totalPersons');
  }
}
