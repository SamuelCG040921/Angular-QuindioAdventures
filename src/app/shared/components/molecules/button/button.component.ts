import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Output() click = new EventEmitter<void>();
  @Input() color: string = '';
  @Input() border: string = '';
  @Input() textColor: string = '';
  @Input() type: 'button' | 'submit' = 'button'

  handleClick() {
    this.click.emit();
  }

  estaDeshabilidato = false;
  habilitarDesabilitarBoton() {
    this.estaDeshabilidato = !this.estaDeshabilidato;
  }
}
