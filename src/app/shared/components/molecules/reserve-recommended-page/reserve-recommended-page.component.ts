import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reserve-recommended-page',
  templateUrl: './reserve-recommended-page.component.html',
  styleUrl: './reserve-recommended-page.component.scss'
})
export class ReserveRecommendedPageComponent {
  @Input() chalet ={
    nombre: '',
    imgPrincipal: ''
  }
}
