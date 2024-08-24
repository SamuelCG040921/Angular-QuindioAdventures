import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collage-view',
  templateUrl: './collage-view.component.html',
  styleUrls: ['./collage-view.component.scss']
})
export class CollageViewComponent {
  @Input() images: string[] = []; // Lista de URLs de imágenes

  constructor() { }
  
}
