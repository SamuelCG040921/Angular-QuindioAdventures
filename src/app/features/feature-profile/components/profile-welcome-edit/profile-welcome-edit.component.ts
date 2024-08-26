import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ChaletService } from '../../services/chalet.service';
import { UpdateService } from '../../services/update-profile.service';

@Component({
  selector: 'app-profile-welcome-edit',
  templateUrl: './profile-welcome-edit.component.html',
  styleUrls: ['./profile-welcome-edit.component.scss']
})
export class ProfileWelcomeEditComponent {
  @Input() buttonVisible: boolean = false;
  @Output() imageUrlUpdated = new EventEmitter<string>(); // Agrega un EventEmitter para enviar la URL de la imagen
  user: any;
  isInputDisabled = true;
  public previsualizacion: string = '../../../../../assets/images/profile-default.webp';
  public archivoCapturado: File | null = null;

  constructor(public authService: AuthService, private sanitizer: DomSanitizer, private chaletService: ChaletService, private updateService: UpdateService) {}

  ngOnInit() {
    this.authService.getUserProfile().then(
      data => {
        this.user = data;
        if (this.user.image) {
          this.previsualizacion = this.user.image;
        }
      },
      err => console.error(err)
    );
  }

  capturarFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    const archivo = input.files?.[0];
    if (archivo) {
      this.archivoCapturado = archivo;

      const reader = new FileReader();
      reader.onload = (e) => {
        this.previsualizacion = e.target?.result as string;
      };
      reader.readAsDataURL(archivo);

      this.subirArchivo();
    } else {
      console.log('No se ha seleccionado ningún archivo');
    }
  }

  subirArchivo(): void {
    if (this.archivoCapturado) {
      this.updateService.uploadFiles(this.archivoCapturado).subscribe({
        next: (response) => {
          console.log('Archivo subido exitosamente:', response);
          this.user.image = response.url; // Actualiza la imagen en el perfil localmente
          this.previsualizacion = response.url;
          this.imageUrlUpdated.emit(response.url); // Emitir la URL de la imagen
        },
        error: (error) => {
          console.error('Error al subir archivo:', error);
        }
      });
    } else {
      console.log('No se ha seleccionado ningún archivo para subir');
    }
  }
}
