import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph-messages',
  templateUrl: './paragraph-messages.component.html',
  styleUrl: './paragraph-messages.component.scss'
})
export class ParagraphMessagesComponent {
  @Input() label: string = '';
  @Input() color: string = '';
}
