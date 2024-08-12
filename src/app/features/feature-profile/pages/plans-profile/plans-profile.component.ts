import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-plans-profile',
  templateUrl: './plans-profile.component.html',
  styleUrl: './plans-profile.component.scss'
})
export class PlansProfileComponent {
  @Output() click = new EventEmitter<void>();
  handleClick() {
    this.click.emit();
  }
  estaDeshabilidato = false;
  habilitarDesabilitarBoton() {
    this.estaDeshabilidato = !this.estaDeshabilidato;
  }
}
