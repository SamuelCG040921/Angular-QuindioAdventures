import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ventaja-servicio',
  templateUrl: './ventaja-servicio.component.html',
  styleUrls: ['./ventaja-servicio.component.scss']
})
export class VentajaServicioComponent {
  @Input() label: string = ''; // Valor por defecto
  @Input() imagen: string | undefined;
  @Output() servicioSeleccionado = new EventEmitter<{ servicio: string, accion: 'agregar' | 'eliminar' }>();

  servicioActivo: boolean = false;

  toggleServicio() {
    this.servicioActivo = !this.servicioActivo;
    const accion = this.servicioActivo ? 'agregar' : 'eliminar';
    this.servicioSeleccionado.emit({ servicio: this.label, accion: accion });
  }

  get icono() {
    return this.servicioActivo ? 'assets/icons/bote-de-basura.png' : 'assets/icons/mas.png';
  }
}
