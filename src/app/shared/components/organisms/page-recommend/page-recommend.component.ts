import { Component } from '@angular/core';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';

@Component({
  selector: 'app-page-recommend',
  templateUrl: './page-recommend.component.html',
  styleUrl: './page-recommend.component.scss'
})
export class PageRecommendComponent {
  chalets:any;

  constructor(private chaletsService:ChaletsService){}

  ngOnInit(){
    this.chaletsService.getChalets()
    .subscribe(res=>{
      this.chalets=res
    })
  }
}
