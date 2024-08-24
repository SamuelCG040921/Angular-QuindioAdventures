import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChaletInfo } from '../../../../features/feature-reserves/models/chaletsById';
import { ActivatedRoute } from '@angular/router';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';
import { MapComponent } from '../../../feature-profile/components/map/map.component'; // Asegúrate de ajustar la ruta al MapComponent

@Component({
  selector: 'app-page-chalet-details',
  templateUrl: './page-chalet-details.component.html',
  styleUrls: ['./page-chalet-details.component.scss']
})
export class PageChaletDetailsComponent implements OnInit, AfterViewInit {
  chalet: ChaletInfo = new ChaletInfo(0, '', '', '', {}, [], []); // Inicializa con valores por defecto
  firstImage: string | null = null; // Variable para almacenar la primera imagen
  restOfImages: string[] = []; // Variable para almacenar el resto de las imágenes
  loading: boolean = true;
  error: string | null = null;

  @ViewChild(MapComponent) mapComponent!: MapComponent; // Referencia al componente del mapa

  constructor(
    private route: ActivatedRoute,
    private chaletsService: ChaletsService
  ) { }

  ngOnInit(): void {
    this.loadChalet();
  }

  ngAfterViewInit(): void {
    // Esto asegura que el MapComponent se ha inicializado antes de intentar usarlo
    if (this.chalet.ubicacion_chalet) {
      this.mapComponent.loadLocationFromBackend(this.chalet.ubicacion_chalet);
    }
  }

  loadChalet(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.chaletsService.getChaletById(id)
        .then(chalet => {
          this.chalet = chalet;

          // Obtener la primera imagen del objeto
          const imagenesKeys = Object.keys(this.chalet.imagenes);
          if (imagenesKeys.length > 0) {
            this.firstImage = this.chalet.imagenes[imagenesKeys[0]];
            // Obtener el resto de las imágenes
            this.restOfImages = imagenesKeys.slice(1).map(key => this.chalet.imagenes[key]);
          } else {
            this.firstImage = null;
            this.restOfImages = [];
          }

          // Actualizar el mapa después de cargar el chalet
          if (this.chalet.ubicacion_chalet) {
            // Usar setTimeout para asegurar que el mapa esté completamente inicializado
            setTimeout(() => {
              this.mapComponent.loadLocationFromBackend(this.chalet.ubicacion_chalet);
            }, 0);
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
