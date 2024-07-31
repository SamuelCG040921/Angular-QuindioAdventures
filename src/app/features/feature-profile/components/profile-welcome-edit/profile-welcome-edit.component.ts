import { Component, Input } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(public authService: AuthService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.authService.getUserProfile().then(
      data => this.user = data,
      err => console.error(err)
    );
  }

  capturarFile(event: any): any{
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen:any) =>{
      this.previsualizacion = imagen.base;
      console.log(imagen)
    })
    //this.archivos.push(archivoCapturado)
  }

  extraerBase64 = async ($event: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result
          });
        };
        reader.onerror = error => {
          resolve({
            base: null
          });
        };
      } catch (e) {
        resolve({
          base: null
        });
      }
    });
  }


}
