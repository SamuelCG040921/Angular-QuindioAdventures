import { Component, OnInit } from '@angular/core';
import { ChaletDetails } from '../../../../features/feature-reserves/models/chalets.model';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';

@Component({
  selector: 'app-chalets-administrator',
  templateUrl: './chalets-administrator.component.html',
  styleUrls: ['./chalets-administrator.component.scss']
})
export class ChaletsAdministratorComponent implements OnInit {
  chalets: ChaletDetails[] = [];

  constructor(private chaletsService: ChaletsService) {}

  ngOnInit(): void {
    this.loadChalets();
  }

  loadChalets(): void {
    this.chaletsService.getChaletsConnectionAdmin().then(
      (data: ChaletDetails[]) => {
        console.log('Datos del chalet:', data);
        this.chalets = data;
      },
      err => console.error(err)
    );
  }
}
