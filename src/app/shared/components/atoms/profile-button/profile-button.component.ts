import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrl: './profile-button.component.scss'
})
export class ProfileButtonComponent implements OnInit {
    user = {
      name: 'Juan Bedoya'
    }

    constructor(){}

    ngOnInit() {
        
    }
}
