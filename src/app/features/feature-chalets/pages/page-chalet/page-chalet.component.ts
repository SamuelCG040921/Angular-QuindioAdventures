import { Component, Input } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';

@Component({
  selector: 'app-page-chalet',
  templateUrl: './page-chalet.component.html',
  styleUrl: './page-chalet.component.scss'
})
export class PageChaletComponent {

  constructor(public authService: AuthService){}
}
