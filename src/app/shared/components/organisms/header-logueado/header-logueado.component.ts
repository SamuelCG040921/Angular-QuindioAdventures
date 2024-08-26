import { Component } from '@angular/core';

@Component({
  selector: 'app-header-logueado',
  templateUrl: './header-logueado.component.html',
  styleUrl: './header-logueado.component.scss'
})
export class HeaderLogueadoComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  disguiseMenu(){
    this.isMenuOpen = false;
  }
}
