import { Component, OnInit } from '@angular/core';
import { ChaletInfo } from '../../../../features/feature-reserves/models/chaletsById';
import { ActivatedRoute } from '@angular/router';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';

@Component({
  selector: 'app-prices-table',
  templateUrl: './prices-table.component.html',
  styleUrls: ['./prices-table.component.scss']
})
export class PricesTableComponent implements OnInit {
  chalet?: ChaletInfo | null = null; // Variable para almacenar los detalles del chalet
  loading: boolean = true; // Variable para indicar si los datos están cargando
  error: string | null = null; // Variable para almacenar un posible error

  constructor(
    private route: ActivatedRoute,
    private chaletsService: ChaletsService // Inyecta el servicio ChaletsService
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

  // Método para agrupar las tarifas por tipo de habitación
  groupByHabitacion(tarifas: any[]): any[] {
    const grouped: { [key: string]: any } = {};

    tarifas.forEach(tarifa => {
      if (!grouped[tarifa.tipo_habitacion]) {
        grouped[tarifa.tipo_habitacion] = {
          tipo_habitacion: tarifa.tipo_habitacion,
          temporada_alta: null,
          temporada_media: null,
          temporada_baja: null
        };
      }
      switch (tarifa.temporada) {
        case 'Alta':
          grouped[tarifa.tipo_habitacion].temporada_alta = tarifa.precio;
          break;
        case 'Media':
          grouped[tarifa.tipo_habitacion].temporada_media = tarifa.precio;
          break;
        case 'Baja':
          grouped[tarifa.tipo_habitacion].temporada_baja = tarifa.precio;
          break;
      }
    });

    return Object.values(grouped);
  }

  // Método para obtener el precio de una temporada específica
  getPriceForSeason(tarifa: any, temporada: string): number {
    switch (temporada) {
      case 'Alta':
        return tarifa.temporada_alta ?? 0;
      case 'Media':
        return tarifa.temporada_media ?? 0;
      case 'Baja':
        return tarifa.temporada_baja ?? 0;
      default:
        return 0;
    }
  }

  // Método para formatear el precio y manejar el caso de precio 0
  formatPrice(value: number): string {
    if (value === 0) {
      return 'No disponible';
    }
    return new Intl.NumberFormat('es-ES', { 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    }).format(value);
  }
}
