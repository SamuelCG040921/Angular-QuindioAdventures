/// <reference types="google.maps" />
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from '../../../feature-reserves/services/user.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PlansService } from '../../services/plans.service';
import { MapComponent } from '../../components/map/map.component';
import { AuthService } from '../../../feature-login/services/auth.service';
import { UpdateService } from '../../services/update-profile.service';
import { PlanDTO } from '../../models/register-plan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-register-form',
  templateUrl: './plan-register-form.component.html',
  styleUrl: './plan-register-form.component.scss'
})
export class PlanRegisterFormComponent {
  @ViewChild(MapComponent) mapComponent!: MapComponent;
  @Output() imageUrlUpdated = new EventEmitter<string>();
  
  planForm!: FormGroup;
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
  isAlertOpen = false;
  isErrorAlertOpen = false;
  isErrorAlertOpen2 = false;
  isWarningAlertOpen = false;
  isUpdateSuccessAlertOpen = false;
  isLoading: boolean = false;

  archivoCapturado1: File | null = null;
  archivoCapturado2: File | null = null;
  archivoCapturado3: File | null = null;
  archivoCapturado4: File | null = null;

  acceptedMunicipios = ['Armenia', 'Calarcá', 'La Tebaida', 'Montenegro', 'Quimbaya', 'Circasia', 'Salento', 'Córdoba', 'Buenavista', 'Génova', 'Pijao', 'Filandia'];

  constructor(private fb: FormBuilder, private userService: UserService, private sanitizer: DomSanitizer, private plansService: PlansService, private authService: AuthService, private updateService: UpdateService, private router:Router) {
  }

  ngOnInit(): void {
    this.planForm = this.fb.group({
      nombre: ['', Validators.required],
      municipio: ['', [Validators.required, this.municipioValidator.bind(this)]],
      ubicacion: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.maxLength(500)]],
      imagenes: this.fb.array([], Validators.required),
      tarifas: this.fb.array([]) // Aquí se agrega el FormArray de tarifas
    });

    this.tarifasform = this.fb.group({
      precio: ['', [Validators.required]],
      temporada: ['', [Validators.required]],
      horaSalida: ['', [Validators.required]],
      horaLlegada: ['', [Validators.required]]
      // Agrega otros campos de tarifa si es necesario
    });

    this.userService.getUserbyID().subscribe((data: any) => {
      this.user = data; // Almacenar el usuario activo
    });
  }

  get tarifas() {
    return this.planForm.get('tarifas') as FormArray;
  }

  get tarifasControls() {
    return this.tarifas.controls;
  }

  get imagenes() {
    return this.planForm.get('imagenes') as FormArray;
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
    this.planForm.patchValue({ servicios: this.serviciosSeleccionados }); // Actualiza el formulario con los servicios seleccionados
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
    if (this.planForm.valid) {
      this.isLoading = true;
      const planData: PlanDTO = this.planForm.value;
      console.log(planData);
      
      
      this.plansService.registrarPlan(planData).subscribe({
        next: (response) => {
          this.isLoading = false;
          console.log('Plan registrado exitosamente:', response);
          this.openUpdateSuccessAlert();
          setTimeout(() => {
           this.router.navigate(['']);
          }, 2500);
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Error al registrar plan:', error);
         this.openErrorAlert();
         setTimeout(() => {
          this.closeErrorAlert();
         }, 2000);
        }
      });
    } else {
      console.log('El formulario no es válido');
      this.openErrorAlert();
      setTimeout(() => {
        this.closeErrorAlert();
       }, 2000);
    }
  }

  openAlert(): void {
    this.isAlertOpen = true;
  }

  closeAlert(): void {
    this.isAlertOpen = false;
  }

  openErrorAlert(): void {
    this.isErrorAlertOpen = true;
  }

  openErrorAlert2(): void {
    this.isErrorAlertOpen2 = true;
  }

  closeErrorAlert(): void {
    this.isErrorAlertOpen = false;
  }

  closeErrorAlert2(): void {
    this.isErrorAlertOpen2 = false;
  }

  openWarningAlert(): void {
    this.isWarningAlertOpen = true;
  }

  closeWarningAlert(): void {
    this.isWarningAlertOpen = false;
  }

  openUpdateSuccessAlert(): void {
    this.isUpdateSuccessAlertOpen = true;
  }

  closeUpdateSuccessAlert(): void {
    this.isUpdateSuccessAlertOpen = false;
  }

  onConfirmModal() {
    this.onSubmit();
  }

  municipioValidator(control: AbstractControl): ValidationErrors | null {
    const municipio = control.value;
    return this.acceptedMunicipios.includes(municipio) ? null : { municipioInvalido: true };
  }
}
