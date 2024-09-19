import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-logueado',
  templateUrl: './header-logueado.component.html',
  styleUrl: './header-logueado.component.scss'
})
export class HeaderLogueadoComponent {
  @Output() searchEvent = new EventEmitter<string>();
  @Output() searchEvent2 = new EventEmitter<string>();

  isMenuOpen = false;

  onSearchEvent(term: string){
    this.searchEvent.emit(term)
  }

  onSearchEvent2(term: string){
    this.searchEvent2.emit(term)
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  disguiseMenu(){
    this.isMenuOpen = false;
  }
}
