import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() searchEvent = new EventEmitter<string>();
  @Output() searchEvent2 = new EventEmitter<string>();


  onSearchEvent(term: string){
    this.searchEvent.emit(term)
  }

  onSearchEvent2(term: string){
    this.searchEvent2.emit(term)
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  disguiseMenu(){
    this.isMenuOpen = false;
  }
}
