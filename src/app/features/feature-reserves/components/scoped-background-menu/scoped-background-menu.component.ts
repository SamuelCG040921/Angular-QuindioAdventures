import { Component } from '@angular/core';

@Component({
  selector: 'app-scoped-background-menu',
  templateUrl: './scoped-background-menu.component.html',
  styleUrl: './scoped-background-menu.component.scss'
})
export class ScopedBackgroundMenuComponent {
  activeLinkIndex: number = 0;

  setActiveButton(index: number): void {
    this.activeLinkIndex = index;
  }
}