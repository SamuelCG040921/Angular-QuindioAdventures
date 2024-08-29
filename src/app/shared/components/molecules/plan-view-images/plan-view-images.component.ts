import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlansService } from '../../../../features/feature-profile/services/plans.service';
import { PlanInfo } from '../../../../features/feature-reserves/models/plansById';

@Component({
  selector: 'app-plan-view-images',
  templateUrl: './plan-view-images.component.html',
  styleUrl: './plan-view-images.component.scss'
})
export class PlanViewImagesComponent {
  plan: PlanInfo = new PlanInfo(0, '', '', '', '', {}, []); // Inicializa con valores por defecto
  firstImage: string | null = null; // Variable para almacenar la primera imagen
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private planesService: PlansService
  ) { }

  ngOnInit(): void {
    this.loadPlan();
  }

  loadPlan(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.planesService.getPlanById(id)
        .then(plan => {
          this.plan = plan;

          // Obtener la primera imagen del objeto
          const imagenesKeys = Object.keys(this.plan.imagenes);
          if (imagenesKeys.length > 0) {
            this.firstImage = this.plan.imagenes[imagenesKeys[0]];
          } else {
            this.firstImage = null;
          }

          this.loading = false;
        })
        .catch(error => {
          this.error = 'Error al cargar el chalet';
          this.loading = false;
        });
    } else {
      this.error = 'ID del chalet no proporcionado';
      this.loading = false;
    }
  }
}
