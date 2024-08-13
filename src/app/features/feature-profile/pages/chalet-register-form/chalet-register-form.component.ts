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
  public previsualizacion:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s';
  public archivos: any = []
  public archivos2: any = [];
  public previsualizacion2:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s';
  public archivos3: any = [];
  public previsualizacion3:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s';
  public archivos4:any = [];
  public previsualizacion4:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s'

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

capturarFile2(event:any): any{
  const archivoCapturado2 = event.target.files[0];
  this.extraerBase64(archivoCapturado2).then((imagen2:any) =>{
    this.previsualizacion2 = imagen2.base;
    console.log(imagen2)
  })
}

capturarFile3(event:any): any{
  const archivoCapturado3 = event.target.files[0];
  this.extraerBase64(archivoCapturado3).then((imagen3:any) =>{
    this.previsualizacion3 = imagen3.base;
    console.log(imagen3)
  })
}

capturarFile4(event:any): any{
  const archivoCapturado4 = event.target.files[0];
  this.extraerBase64(archivoCapturado4).then((imagen4:any) =>{
    this.previsualizacion4 = imagen4.base;
    console.log(imagen4)
  })
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

