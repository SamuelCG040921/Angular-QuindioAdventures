import { Component, OnInit } from '@angular/core';
import { ChaletDetails } from '../../../../features/feature-reserves/models/chalets.model';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';

@Component({
  selector: 'app-chalets-administrator',
  templateUrl: './chalets-administrator.component.html',
  styleUrl: './chalets-administrator.component.scss'
})
export class ChaletsAdministratorComponent implements OnInit {
  chalets!: ChaletDetails[];

  constructor(private chaletsService:ChaletsService){}


  ngOnInit(): void {
      this.chaletsService.getChaletsConnection().then(
        (data: ChaletDetails[]) => {
          console.log('Datos del chalet:',data);
          this.chalets = data
        },
        err => console.error(err)
      );

}
}
