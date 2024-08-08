import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../feature-reserves/services/user.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ChaletService } from '../../services/chalet.service';

@Component({
  selector: 'app-chalet-register-form',
  templateUrl: './chalet-register-form.component.html',
  styleUrls: ['./chalet-register-form.component.scss']
})
export class ChaletRegisterFormComponent implements OnInit {
  user: any;
  isInputDisabled = true;
  previsualizacion: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s';
  archivos: any[] = [];
  previsualizacion2: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s';
  archivos2: any[] = [];
  previsualizacion3: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s';
  archivos3: any[] = [];
  previsualizacion4: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s';
  archivos4: any[] = [];

  constructor(private userService: UserService, private sanitizer: DomSanitizer, private chaletService: ChaletService) {}

  ngOnInit(): void {
    this.userService.getUserbyID().subscribe((data: any) => {
      this.user = data; // Almacenar el usuario activo
    });
  }

  habilitarInput(): void {
    this.isInputDisabled = false;
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
          this.previsualizacion = response.url;
        },
        error: (error) => {
          console.error('Error al subir archivo:', error)
        }
      })
    } else {
      console.log('No se ha seleccionado ningún archivo');
    }
  }

  capturarFile2(event: Event): void {
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
          this.previsualizacion2 = response.url;
        },
        error: (error) => {
          console.error('Error al subir archivo:', error)
        }
      })
    } else {
      console.log('No se ha seleccionado ningún archivo');
    }
  }

  capturarFile3(event: Event): void {
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
          this.previsualizacion3 = response.url;
        },
        error: (error) => {
          console.error('Error al subir archivo:', error)
        }
      })
    } else {
      console.log('No se ha seleccionado ningún archivo');
    }
  }

  capturarFile4(event: Event): void {
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
          this.previsualizacion4 = response.url;
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
