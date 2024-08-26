import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service'; // Asegúrate de que la ruta es correcta
import { ChaletInfo } from '../../../../features/feature-reserves/models/chaletsById'; // Importa tu modelo

@Component({
  selector: 'app-miga-de-pan',
  templateUrl: './miga-de-pan.component.html',
  styleUrls: ['./miga-de-pan.component.scss']
})
export class MigaDePanComponent implements OnInit {
  chalet?: ChaletInfo | null = null; // Variable para almacenar los detalles del chalet
  loading: boolean = true; // Variable para indicar si los datos están cargando
  error: string | null = null; // Variable para almacenar un posible error

  constructor(
    public route: ActivatedRoute,
    public chaletsService: ChaletsService // Inyecta el servicio ChaletsService
  ) { }

  ngOnInit(): void {
    this.loadChalet();
  }

  loadChalet(): void {
    const id = this.route.snapshot.paramMap.get('id');
  
    if (id) {
      this.chaletsService.getChaletById(id)
        .then(chalet => {
          this.chalet = chalet;
          this.loading = false;
          console.log('Chalet cargado:', this.chalet);
        })
        .catch(error => {
          this.error = 'Error al cargar el chalet';
          this.loading = false;
          console.error('Error al cargar el chalet:', error);
        });
    } else {
      this.error = 'ID del chalet no proporcionado';
      this.loading = false;
    }
  }
}
