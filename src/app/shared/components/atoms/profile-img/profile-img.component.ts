import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrl: './profile-img.component.scss'
})
export class ProfileImgComponent implements OnInit {
  user = {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pnowYUH23jEe1PJ9cAR1a6i7wrQBoTyVu8GH7-5kcw&s'
  }

  constructor(){}

  ngOnInit() {
      
  }
}
