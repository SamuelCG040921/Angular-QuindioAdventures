import { Component } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';

@Component({
  selector: 'app-page-plan',
  templateUrl: './page-plan.component.html',
  styleUrl: './page-plan.component.scss'
})
export class PagePlanComponent {
constructor(public authService:AuthService){}
}
