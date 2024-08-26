import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-peopple-count-info',
  templateUrl: './peopple-count-info.component.html',
  styleUrls: ['./peopple-count-info.component.scss']
})
export class PeoppleCountInfoComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';  // Asegúrate de que esta propiedad esté declarada
  @Input() personCounter: number = 0; // Asegúrate de que esta propiedad esté declarada
  
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.personCounter++;
    this.countChange.emit(this.personCounter);
  }

  decrement() {
    if (this.personCounter > 0) {
      this.personCounter--;
      this.countChange.emit(this.personCounter);
    }
  }
}
