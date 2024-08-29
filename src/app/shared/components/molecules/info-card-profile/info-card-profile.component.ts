import { Component, Input, input } from '@angular/core';
import { ReservesService } from '../../../../features/feature-reserves/services/reserves.service';

@Component({
  selector: 'app-info-card-profile',
  templateUrl: './info-card-profile.component.html',
  styleUrl: './info-card-profile.component.scss'
})
export class InfoCardProfileComponent {
@Input()info:any= {
  fecharegistro:''
};
constructor(private reservesService:ReservesService){}

}
