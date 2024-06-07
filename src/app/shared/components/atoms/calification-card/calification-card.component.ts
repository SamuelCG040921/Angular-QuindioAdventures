import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calification-card',
  templateUrl: './calification-card.component.html',
  styleUrl: './calification-card.component.scss'
})
export class CalificationCardComponent implements OnInit {
  count: number = 5; // Number of circles to generate
  circleArray: number[] = []; // Array to hold circle elements
  
  ngOnInit(): void {
    // Fill the circleArray with the desired number of elements
    for (let i = 0; i < this.count; i++) {
      this.circleArray.push(i); // Push an element for each circle
    }
}
}