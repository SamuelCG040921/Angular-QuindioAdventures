import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calification-card',
  templateUrl: './calification-card.component.html',
  styleUrls: ['./calification-card.component.scss']
})
export class CalificationCardComponent {
  @Input() rating: number = 0;
  @Input() maxRating: number = 5;
  circles: number[] = [];

  ngOnInit(): void {
    this.circles = Array(this.maxRating).fill(0);
  }

  setRating(rating: number): void {
    this.rating = rating;
  }
}
