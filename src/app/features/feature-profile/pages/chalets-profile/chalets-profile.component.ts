import { Component, EventEmitter, Output } from '@angular/core';
import { ChaletsInfoPerfil } from '../../../feature-reserves/models/chaletsInfoPerfil';
import { ChaletsService } from '../../../feature-reserves/services/chalets.service';

@Component({
  selector: 'app-chalets-profile',
  templateUrl: './chalets-profile.component.html',
  styleUrl: './chalets-profile.component.scss'
})
export class ChaletsProfileComponent {
  @Output() click = new EventEmitter<void>();
  handleClick() {
    this.click.emit();
  }
  estaDeshabilidato = false;
  habilitarDesabilitarBoton() {
    this.estaDeshabilidato = !this.estaDeshabilidato;
  }

  chalets!:ChaletsInfoPerfil[];

  constructor(private chaletsService:ChaletsService){}

  ngOnInit(){
    this.chaletsService.getChaletsByEmail().then(
      (data: ChaletsInfoPerfil[]) => {
        this.chalets = data;
        
      },
      err => {
        console.error('Error en la solicitud:', err.response.data);
      }
    );
  }
}
