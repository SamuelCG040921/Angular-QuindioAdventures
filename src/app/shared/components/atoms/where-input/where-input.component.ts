import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-where-input',
  templateUrl: './where-input.component.html',
  styleUrl: './where-input.component.scss'
})
export class WhereInputComponent {
  searchMunicipioControl = new FormControl();

  @Output() searchTerm2 = new EventEmitter<string>();

  constructor(){
    this.searchMunicipioControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map(value => typeof value === 'object' ? value.municipio : value)
      )
      .subscribe(value =>{
        this.searchTerm2.emit(value)
      })
  }
}
