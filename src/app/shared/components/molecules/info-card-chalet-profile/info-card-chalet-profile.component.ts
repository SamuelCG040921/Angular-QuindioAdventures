import { Component, Input } from '@angular/core';
import { ReservesService } from '../../../../features/feature-reserves/services/reserves.service';

@Component({
  selector: 'app-info-card-chalet-profile',
  templateUrl: './info-card-chalet-profile.component.html',
  styleUrl: './info-card-chalet-profile.component.scss'
})
export class InfoCardChaletProfileComponent {
  @Input()info:any= {
    fecharegistro:''
  };
  constructor(private reservesService:ReservesService){}
  ngOnInit(): void {
    
  }
}
