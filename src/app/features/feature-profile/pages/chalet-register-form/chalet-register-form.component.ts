import { Component } from '@angular/core';
import { UserService } from '../../../feature-reserves/services/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-chalet-register-form',
  templateUrl: './chalet-register-form.component.html',
  styleUrl: './chalet-register-form.component.scss'
})
export class ChaletRegisterFormComponent {
  user:any
  isInputDisabled = true;
  public previsualizacion:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s'
  public archivos: any = []
 

  habilitarInput() {
    this.isInputDisabled = false;
  } 
  
  

  constructor(private userService: UserService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.userService.getUserbyID() // Llamar al método del servicio
    .subscribe((data: any) => {
      this.user = data; // Almacenar el usuario activo
    });
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

