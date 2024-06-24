import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tittle-messages',
  templateUrl: './tittle-messages.component.html',
  styleUrl: './tittle-messages.component.scss'
})
export class TittleMessagesComponent {
  @Input() label: string = '';
  @Input() color: string = '';
}
