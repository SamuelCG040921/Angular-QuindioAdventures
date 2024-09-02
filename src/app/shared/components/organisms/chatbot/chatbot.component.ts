import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatbotService } from '../../../../features/feature-profile/services/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  chatbotForm!: FormGroup;
  isSubmitting: boolean = false;
  isChatOpen = false;
  introText = 'Hola, mi nombre es chaplanito. ¿Cómo puedo ayudarte?';
  messages: { fromUser: boolean, text: string }[] = [];
  newMessage = '';

  constructor(private fb: FormBuilder, private chatbotService: ChatbotService){}

  ngOnInit(): void {
      this.chatbotForm
    = this.fb.group({
      messageSend: ['']
    })
  }

  onSubmit() {
    if(this.chatbotForm.valid){
      this.isSubmitting = true;

      const messageData = this.chatbotForm.value.messageSend;


      this.chatbotService.sendMessage(messageData).then(
        response => {
          if (this.newMessage.trim()) {
            this.messages.push({ text: this.newMessage, fromUser: true });
            this.newMessage = '';
            this.messages.push({text: response.response, fromUser: false});
            // Lógica para enviar el mensaje al backend y recibir respuesta
          }

          this.isSubmitting = false;
          console.log('envio exitoso del mensaje:', response);
        }
      ).catch(
        error => {
          this.isSubmitting = false;
          console.error('Error en el envio del mensaje:', error)
        }
      )
      
    } else{
      console.error('Form is not valid');
      this.chatbotForm.markAllAsTouched();
    }
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }


  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }
}
