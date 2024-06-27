import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  activeButtonIndex: number = 0;

  setActiveButton(index: number): void {
    this.activeButtonIndex = index;
  }
}
