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
  isLoading: boolean = false;
  isErrorAlertOpen = false; // Nuevo estado de carga

  constructor(private fb: FormBuilder, private chatbotService: ChatbotService){}

  ngOnInit(): void {
    this.chatbotForm = this.fb.group({
      messageSend: ['']
    });
  }

  onSubmit() {
    if (this.chatbotForm.valid) {
      this.isSubmitting = true;
      this.isLoading = true; // Mostrar el spinner al iniciar la solicitud

      const messageData = this.chatbotForm.value.messageSend;

      this.chatbotService.sendMessage(messageData).then(
        response => {
          if (this.newMessage.trim()) {
            this.messages.push({ text: this.newMessage, fromUser: true });
            this.newMessage = '';
            this.messages.push({text: response.response, fromUser: false});
          }

          this.isSubmitting = false;
          this.isLoading = false; // Ocultar el spinner al recibir la respuesta
          console.log('envio exitoso del mensaje:', response);
        }
      ).catch(
        error => {
          this.isSubmitting = false;
          this.isLoading = false; // Ocultar el spinner en caso de error
          console.error('Error en el envio del mensaje:', error);
          this.openErrorAlert();
          setTimeout(() => {
            this.closeErrorAlert(); // Redirigir al home después de 2 segundos
          }, 2000);
        }
      );
    } else {
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

  openErrorAlert(): void {
    this.isErrorAlertOpen = true;
  }

  closeErrorAlert(): void {
    this.isErrorAlertOpen = false;
  }
}
