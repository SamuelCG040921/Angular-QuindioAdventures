import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
    private progreso: number = 33.33; // Progreso inicial
  
    // Función para obtener el progreso
    getProgreso(): number {
      return this.progreso;
    }
  
    // Función para actualizar el progreso
    setProgreso(nuevoProgreso: number): void {
      this.progreso = nuevoProgreso;
    }
  }
  
