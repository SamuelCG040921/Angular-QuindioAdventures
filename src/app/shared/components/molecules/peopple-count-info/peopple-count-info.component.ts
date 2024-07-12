import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-peopple-count-info',
  templateUrl: './peopple-count-info.component.html',
  styleUrl: './peopple-count-info.component.scss'
})
export class PeoppleCountInfoComponent {
@Input() title: string = '';
@Input() description: string = '';
@Input() imageUrl: string = '';


personCounter = 0;

addPerson(){
  this.personCounter++
}

removePerson(){
  this.personCounter--
}
}
