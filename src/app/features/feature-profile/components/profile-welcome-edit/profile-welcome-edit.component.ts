import { Component, Input } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ChaletService } from '../../services/chalet.service';

@Component({
  selector: 'app-profile-welcome-edit',
  templateUrl: './profile-welcome-edit.component.html',
  styleUrl: './profile-welcome-edit.component.scss'
})
export class ProfileWelcomeEditComponent {
  @Input() buttonVisible: boolean = false;
  user: any;
  isInputDisabled = true;
  public previsualizacion:string = '../../../../../assets/images/profile-default.webp';
  public archivos: any = []

  habilitarInput() {
    this.isInputDisabled = false;
  }

  constructor(public authService: AuthService, private sanitizer: DomSanitizer, private chaletService: ChaletService) {}

  ngOnInit() {
    this.authService.getUserProfile().then(
      data => this.user = data,
      err => console.error(err)
    );
  }

  capturarFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    const archivoCapturado = input.files?.[0];
    if (archivoCapturado) {
      console.log('Nombre del archivo:', archivoCapturado.name);
      console.log('Tamaño del archivo:', archivoCapturado.size);
      console.log('Tipo de archivo:', archivoCapturado.type);

      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target?.result;
        console.log('Contenido del archivo:', fileContent);
        // Aquí puedes enviar el contenido del archivo a tu backend
      };
      reader.readAsText(archivoCapturado)
      this.chaletService.uploadFiles(archivoCapturado).subscribe({
        next: (response) => {

          console.log('Archivo subido exitosamente:', response);
          this.user.image = response.url;
        },
        error: (error) => {
          console.error('Error al subir archivo:', error)
        }
      })
    } else {
      console.log('No se ha seleccionado ningún archivo');
    }
  }
  


}
