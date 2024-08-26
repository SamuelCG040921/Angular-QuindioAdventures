import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  images: string[] = [
    '../../../../../assets/images/image 56.png',
    '../../../../../assets/images/adminImgInicio.jpeg',
    '../../../../../assets/images/arbolpicho.jpeg',
    '../../../../../assets/images/destination_eje_cafetero.jpg'
  ];

  activeSlideIndex: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  setActiveButton(index: number): void {
    this.activeSlideIndex = index;
  }

  previousSlide(): void {
    this.activeSlideIndex = (this.activeSlideIndex > 0) ? this.activeSlideIndex - 1 : this.images.length - 1;
  }

  nextSlide(): void {
    this.activeSlideIndex = (this.activeSlideIndex < this.images.length - 1) ? this.activeSlideIndex + 1 : 0;
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 2500); // Cambia cada 3 segundos
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}