import { Component } from '@angular/core';
import { AuthService } from '../feature-login/services/auth.service';

@Component({
  selector: 'app-feature-reserves',
  templateUrl: './feature-reserves.component.html',
  styleUrl: './feature-reserves.component.scss'
})
export class FeatureReservesComponent {
  constructor(public authService:AuthService){}
  }
  
