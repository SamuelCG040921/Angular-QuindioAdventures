import { Component, Input } from '@angular/core';
import { ChaletsService } from '../../../feature-reserves/services/chalets.service';

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrl: './card-plan.component.scss'
})
export class CardPlanComponent {
  @Input()chalets:any= {
    nombre:'',
  };
  constructor(private chaletsService:ChaletsService){}

  ngOnInit(){
    this.chaletsService.getChalets()
    .subscribe(res=>{
      this.chalets=res
    })
  }
}
