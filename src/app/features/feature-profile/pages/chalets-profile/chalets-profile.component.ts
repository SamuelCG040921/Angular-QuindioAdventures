import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chalets-profile',
  templateUrl: './chalets-profile.component.html',
  styleUrl: './chalets-profile.component.scss'
})
export class ChaletsProfileComponent {
  @Output() click = new EventEmitter<void>();
  handleClick() {
    this.click.emit();
  }
  estaDeshabilidato = false;
  habilitarDesabilitarBoton() {
    this.estaDeshabilidato = !this.estaDeshabilidato;
  }
}
