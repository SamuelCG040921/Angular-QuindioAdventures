import { Component, Input } from '@angular/core';
import { ReservesService } from '../../../../features/feature-reserves/services/reserves.service';

@Component({
  selector: 'app-card-profile-plan',
  templateUrl: './card-profile-plan.component.html',
  styleUrl: './card-profile-plan.component.scss'
})
export class CardProfilePlanComponent {
  @Input()info:any= {
    nombre:'',
  };
  constructor(private reservesService:ReservesService){}
  ngOnInit(): void {
    this.reservesService.getReservebyCode(this.info.codigo).
    subscribe((res=>{
       this.info = res
    }))
  }
  }

