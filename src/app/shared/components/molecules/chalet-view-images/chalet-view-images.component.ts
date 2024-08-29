import { Component, OnInit } from '@angular/core';
import { ChaletInfo } from '../../../../features/feature-reserves/models/chaletsById';
import { ActivatedRoute } from '@angular/router';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';

@Component({
  selector: 'app-chalet-view-images',
  templateUrl: './chalet-view-images.component.html',
  styleUrls: ['./chalet-view-images.component.scss']
})
export class ChaletViewImagesComponent implements OnInit {
  chalet: ChaletInfo = new ChaletInfo(0, '', '', '', '', {}, [], []); // Inicializa con valores por defecto
  firstImage: string | null = null; // Variable para almacenar la primera imagen
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private chaletsService: ChaletsService
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

          // Obtener la primera imagen del objeto
          const imagenesKeys = Object.keys(this.chalet.imagenes);
          if (imagenesKeys.length > 0) {
            this.firstImage = this.chalet.imagenes[imagenesKeys[0]];
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
