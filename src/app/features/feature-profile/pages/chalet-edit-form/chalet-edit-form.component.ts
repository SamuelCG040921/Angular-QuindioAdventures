/// <reference types="google.maps" />
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../feature-reserves/services/user.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ChaletService } from '../../services/chalet.service';
import { MapComponent } from '../../components/map/map.component';
import { AuthService } from '../../../feature-login/services/auth.service';
import { UpdateService } from '../../services/update-profile.service';
import { ChaletDTO } from '../../models/register-chalet';
import { from } from 'rxjs';

@Component({
  selector: 'app-chalet-edit-form',
  templateUrl: './chalet-edit-form.component.html',
  styleUrl: './chalet-edit-form.component.scss'
})
export class ChaletEditFormComponent {
  @ViewChild(MapComponent) mapComponent!: MapComponent;
  @Output() imageUrlUpdated = new EventEmitter<string>();
  
  chaletForm!: FormGroup;
  tarifasform!: FormGroup; // Asegúrate de que esta propiedad esté declarada
  serviciosSeleccionados: string[] = [];
  user: any;
  isInputDisabled = true;
  isLocationValid = false;
  previsualizacion: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s';
  archivos: any[] = [];
  previsualizacion2: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s';
  archivos2: any[] = [];
  previsualizacion3: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s';
  archivos3: any[] = [];
  previsualizacion4: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s';
  archivos4: any[] = [];

  archivoCapturado1: File | null = null;
  archivoCapturado2: File | null = null;
  archivoCapturado3: File | null = null;
  archivoCapturado4: File | null = null;

  constructor(private fb: FormBuilder, private userService: UserService, private sanitizer: DomSanitizer, private chaletService: ChaletService, private authService: AuthService, private updateService: UpdateService) {
  }

  ngOnInit(): void {
    this.chaletForm = this.fb.group({
      nombre: ['', Validators.required],
      municipio: ['', Validators.required],
      ubicacion: ['', Validators.required],
      descripcion: ['', Validators.required],
      servicios: [[], Validators.required],
      imagenes: this.fb.array([], Validators.required),
      tarifas: this.fb.array([]) // Aquí se agrega el FormArray de tarifas
    });

    this.tarifasform = this.fb.group({
      precio: ['', [Validators.required]],
      tipohabitacion: ['', [Validators.required]],
      temporada: ['', [Validators.required]],
      // Agrega otros campos de tarifa si es necesario
    });

    this.userService.getUserbyID().subscribe((data: any) => {
      this.user = data; // Almacenar el usuario activo
    });
  }

  get tarifas() {
    return this.chaletForm.get('tarifas') as FormArray;
  }

  get tarifasControls() {
    return this.tarifas.controls;
  }

  get imagenes() {
    return this.chaletForm.get('imagenes') as FormArray;
  }

  verificarUbicacion(direccion: string, municipio:string): void {
    const direccionCompleta = `${direccion}, ${municipio}`;
    this.mapComponent.verifyLocation(direccionCompleta);
  }

  onLocationVerified(isValid: boolean): void {
    this.isLocationValid = isValid;
    if (isValid) {
      this.habilitarInput();
    } else {
      console.error('Ubicación no válida.');
    }
  }

  habilitarInput(): void {
    if (this.isLocationValid) {
      this.isInputDisabled = false;
    } else {
      console.error('La ubicación debe ser válida antes de habilitar el input.');
    }
  }

  subirArchivo1(): void {
    if (this.archivoCapturado1) {
      this.updateService.uploadFiles(this.archivoCapturado1).subscribe({
        next: (response) => {
          console.log('Archivo subido exitosamente:', response);
          this.previsualizacion = response.url;
          this.imagenes.push(this.fb.control(response.url)); // Añadir la URL de la imagen al FormArray
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

  subirArchivo2(): void {
    if (this.archivoCapturado2) {
      this.updateService.uploadFiles(this.archivoCapturado2).subscribe({
        next: (response) => {
          console.log('Archivo subido exitosamente:', response);
          this.previsualizacion2 = response.url;
          this.imagenes.push(this.fb.control(response.url)); // Añadir la URL de la imagen al FormArray
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

  subirArchivo3(): void {
    if (this.archivoCapturado3) {
      this.updateService.uploadFiles(this.archivoCapturado3).subscribe({
        next: (response) => {
          console.log('Archivo subido exitosamente:', response);
          this.previsualizacion3 = response.url;
          this.imagenes.push(this.fb.control(response.url)); // Añadir la URL de la imagen al FormArray
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

  subirArchivo4(): void {
    if (this.archivoCapturado4) {
      this.updateService.uploadFiles(this.archivoCapturado4).subscribe({
        next: (response) => {
          console.log('Archivo subido exitosamente:', response);
          this.previsualizacion4 = response.url;
          this.imagenes.push(this.fb.control(response.url)); // Añadir la URL de la imagen al FormArray
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

  capturarFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.archivoCapturado1 = input.files?.[0] || null;
    if (this.archivoCapturado1) {
      const reader = new FileReader();
      reader.onload = (e) => this.previsualizacion = e.target?.result as string;
      reader.readAsDataURL(this.archivoCapturado1);
      this.subirArchivo1();
    } else {
      console.log('No se ha seleccionado ningún archivo');
    }
  }

  capturarFile2(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.archivoCapturado2 = input.files?.[0] || null;
    if (this.archivoCapturado2) {
      const reader = new FileReader();
      reader.onload = (e) => this.previsualizacion2 = e.target?.result as string;
      reader.readAsDataURL(this.archivoCapturado2);
      this.subirArchivo2();
    } else {
      console.log('No se ha seleccionado ningún archivo');
    }
  }

  capturarFile3(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.archivoCapturado3 = input.files?.[0] || null;
    if (this.archivoCapturado3) {
      const reader = new FileReader();
      reader.onload = (e) => this.previsualizacion3 = e.target?.result as string;
      reader.readAsDataURL(this.archivoCapturado3);
      this.subirArchivo3();
    } else {
      console.log('No se ha seleccionado ningún archivo');
    }
  }

  capturarFile4(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.archivoCapturado4 = input.files?.[0] || null;
    if (this.archivoCapturado4) {
      const reader = new FileReader();
      reader.onload = (e) => this.previsualizacion4 = e.target?.result as string;
      reader.readAsDataURL(this.archivoCapturado4);
      this.subirArchivo4();
    } else {
      console.log('No se ha seleccionado ningún archivo');
    }
  }

  actualizarServicio(evento: { servicio: string, accion: 'agregar' | 'eliminar' }) {
    if (evento.accion === 'agregar') {
      if (!this.serviciosSeleccionados.includes(evento.servicio)) {
        this.serviciosSeleccionados.push(evento.servicio);
        console.log(this.serviciosSeleccionados);
      }
    } else if (evento.accion === 'eliminar') {
      this.serviciosSeleccionados = this.serviciosSeleccionados.filter(servicio => servicio !== evento.servicio);
      console.log(this.serviciosSeleccionados);
    }
    this.chaletForm.patchValue({ servicios: this.serviciosSeleccionados }); // Actualiza el formulario con los servicios seleccionados
  }

  guardarTarifa(): void {
    if (this.tarifasform.valid) {
      this.tarifas.push(this.fb.group(this.tarifasform.value));
      this.tarifasform.reset();
    }
  }

  eliminarTarifa(index: number): void {
    this.tarifas.removeAt(index);
  }
  
  onSubmit(): void {
    if (this.chaletForm.valid) {
      const chaletData: ChaletDTO = this.chaletForm.value;
      console.log(chaletData);
      
      
      this.chaletService.registrarChalet(chaletData).subscribe({
        next: (response) => {
          console.log('Chalet registrado exitosamente:', response);
          // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
        },
        error: (error) => {
          console.error('Error al registrar chalet:', error);
          // Aquí podrías mostrar un mensaje de error al usuario
        }
      });
    } else {
      console.log('El formulario no es válido');
    }
  }
}
