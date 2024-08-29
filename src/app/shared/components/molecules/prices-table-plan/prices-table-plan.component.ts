import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlansService } from '../../../../features/feature-profile/services/plans.service';
import { PlanInfo } from '../../../../features/feature-reserves/models/plansById';

@Component({
  selector: 'app-prices-table-plan',
  templateUrl: './prices-table-plan.component.html',
  styleUrl: './prices-table-plan.component.scss'
})
export class PricesTablePlanComponent {
  plan?: PlanInfo | null = null; // Variable para almacenar los detalles del chalet
  loading: boolean = true; // Variable para indicar si los datos están cargando
  error: string | null = null; // Variable para almacenar un posible error

  constructor(
    private route: ActivatedRoute,
    private plansService:PlansService // Inyecta el servicio ChaletsService
  ) { }

  ngOnInit(): void {
    this.loadPlan();
  }

  loadPlan(): void {
    const id = this.route.snapshot.paramMap.get('id');
  
    if (id) {
      this.plansService.getPlanById(id)
        .then(plan => {
          this.plan = plan;
          this.loading = false;
          console.log('Chalet cargado:', this.plan);
        })
        .catch(error => {
          this.error = 'Error al cargar el plan';
          this.loading = false;
          console.error('Error al cargar el plan:', error);
        });
    } else {
      this.error = 'ID del plan no proporcionado';
      this.loading = false;
    }
  }

  // Método para agrupar las tarifas por tipo de habitación
  groupByHabitacion(tarifas: any[]): any[] {
    const grouped: { [key: string]: any } = {};

    tarifas.forEach(tarifa => {
      if (!grouped[tarifa.hora_salida]) {
        grouped[tarifa.hora_salida] = {
          hora_salida: tarifa.hora_salida,
          hora_llegada: tarifa.hora_llegada,
          temporada_alta: null,
          temporada_media: null,
          temporada_baja: null
        };
      }
      switch (tarifa.temporada) {
        case 'Alta':
          grouped[tarifa.hora_salida].temporada_alta = tarifa.precio;
          break;
        case 'Media':
          grouped[tarifa.hora_salida].temporada_media = tarifa.precio;
          break;
        case 'Baja':
          grouped[tarifa.hora_salida].temporada_baja = tarifa.precio;
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
