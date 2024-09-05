import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-logueado',
  templateUrl: './nav-logueado.component.html',
  styleUrl: './nav-logueado.component.scss'
})
export class NavLogueadoComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  disguiseMenu(){
    this.isMenuOpen = false;
  }
}
