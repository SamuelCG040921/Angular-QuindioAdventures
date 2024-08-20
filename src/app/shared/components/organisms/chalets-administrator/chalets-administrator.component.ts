import { Component } from '@angular/core';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';

@Component({
  selector: 'app-chalets-administrator',
  templateUrl: './chalets-administrator.component.html',
  styleUrl: './chalets-administrator.component.scss'
})
export class ChaletsAdministratorComponent {
  chalets:any;

  constructor(private chaletsService:ChaletsService){}

  ngOnInit(){
    this.chaletsService.getChalets()
    .subscribe(res=>{
      this.chalets=res
    })
  }
}
