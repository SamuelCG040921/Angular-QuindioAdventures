import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-logueado',
  templateUrl: './header-logueado.component.html',
  styleUrl: './header-logueado.component.scss'
})
export class HeaderLogueadoComponent {
  @Output() searchEvent = new EventEmitter<string>();
  isMenuOpen = false;

  onSearchEvent(term: string){
    this.searchEvent.emit(term)
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  disguiseMenu(){
    this.isMenuOpen = false;
  }
}
