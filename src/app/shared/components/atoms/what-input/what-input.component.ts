import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-what-input',
  templateUrl: './what-input.component.html',
  styleUrl: './what-input.component.scss'
})
export class WhatInputComponent {
  searchControl = new FormControl();

  @Output() searchTerm = new EventEmitter<string>();

  constructor(){

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map(value => typeof value === 'object' ? value.nombre : value) 
      )
      .subscribe(value =>{
        this.searchTerm.emit(value)
      })
  }

}
