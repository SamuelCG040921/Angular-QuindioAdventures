import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.scss'
})
export class PageHomeComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  disguiseMenu(){
    this.isMenuOpen = false;
  }
constructor(public authService:AuthService){
  
}
}
