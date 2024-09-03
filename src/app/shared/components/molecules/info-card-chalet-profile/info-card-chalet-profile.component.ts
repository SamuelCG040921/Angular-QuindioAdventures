import { Component, Input } from '@angular/core';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';
import { ChaletsInfoPerfil } from '../../../../features/feature-reserves/models/chaletsInfoPerfil';

@Component({
  selector: 'app-info-card-chalet-profile',
  templateUrl: './info-card-chalet-profile.component.html',
  styleUrls: ['./info-card-chalet-profile.component.scss']
})
export class InfoCardChaletProfileComponent {

  chalets!: ChaletsInfoPerfil[];

  @Input() info: any = {
    fechaRegistro: ''
  };

  constructor(private chaletsService: ChaletsService) {}

  ngOnInit() {
    this.chaletsService.getChaletsByEmail().then(
      (data: ChaletsInfoPerfil[]) => {
        this.chalets = data;
      },
      err => {
        console.error('Error en la solicitud:', err);
      }
    );
  }

  eliminarChalet(id: number) {
    this.chaletsService.eliminarChalet(id).then(
      response => {
        console.log('Chalet eliminado:', response);
        // Actualizar la lista de chalets después de eliminar
        this.chalets = this.chalets.filter(chalet => chalet.id_chalet !== id);
      },
      err => {
        console.error('Error eliminando el chalet:', err);
      }
    );
  }
  
}
