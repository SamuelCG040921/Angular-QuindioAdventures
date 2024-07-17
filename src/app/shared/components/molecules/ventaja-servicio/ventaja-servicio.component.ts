import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ventaja-servicio',
  templateUrl: './ventaja-servicio.component.html',
  styleUrl: './ventaja-servicio.component.scss'
})
export class VentajaServicioComponent {
@Input()label: string = '';
@Input()imagen: string = '';
}
