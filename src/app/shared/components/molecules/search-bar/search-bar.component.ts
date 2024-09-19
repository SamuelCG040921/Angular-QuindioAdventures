import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @Output() searchEvent = new EventEmitter<string>();
  @Output() searchEvent2 = new EventEmitter<string>();

  onSearchTerm(term: string){
    console.log(term, 123456);
    
    this.searchEvent.emit(term)
  }

  onSearchTerm2(term: string){
    console.log(term, 123456);
    
    this.searchEvent2.emit(term)
  }
}
