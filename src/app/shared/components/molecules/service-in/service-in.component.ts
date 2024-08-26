import { Component } from '@angular/core';
import { ChaletInfo } from '../../../../features/feature-reserves/models/chaletsById';
import { ActivatedRoute } from '@angular/router';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';

@Component({
  selector: 'app-service-in',
  templateUrl: './service-in.component.html',
  styleUrl: './service-in.component.scss'
})
export class ServiceInComponent {
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

  agruparServicios(servicios: string[] | undefined, size: number): string[][] {
    if (!servicios) {
      return [];
    }
    const grouped = [];
    for (let i = 0; i < servicios.length; i += size) {
      grouped.push(servicios.slice(i, i + size));
    }
    return grouped;
  }
}
