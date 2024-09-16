import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChaletInfo } from '../../../../features/feature-reserves/models/chaletsById';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ChaletsService } from '../../../../features/feature-reserves/services/chalets.service';
import { MapComponent } from '../../../feature-profile/components/map/map.component';
import { AuthService } from '../../../feature-login/services/auth.service';
import { ChaletIdService } from '../../services/chalet-id.service';
import { TarifaService } from '../../services/tarifa.service';
import { CountPeopleService } from '../../services/count-people.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { CommentData } from '../../models/commentData.model';

@Component({
  selector: 'app-page-chalet-details',
  templateUrl: './page-chalet-details.component.html',
  styleUrls: ['./page-chalet-details.component.scss']
})
export class PageChaletDetailsComponent implements OnInit, AfterViewInit {
  botones = false;
  chalet: ChaletInfo = new ChaletInfo(0, '', '', '', '', {}, [], []); 
  firstImage: string | null = null; 
  restOfImages: string[] = []; 
  loading: boolean = true;
  error: string | null = null;
  tarifaSeleccionada: any | null = null;
  totalPersons: number = 0;
  adultCount: number = 0;
  childCount: number = 0;
  id_chalet = this.route.snapshot.paramMap.get('id');
  selectedRating: number = 0;
  isLoading: boolean = false
  isAlertOpen = false;
  isErrorAlertOpen = false;
  isWarningAlertOpen = false;
  isUpdateSuccessAlertOpen = false;
  isAlertOpen2 = false;
  isErrorAlertOpen2 = false;
  isWarningAlertOpen2 = false;
  isUpdateSuccessAlertOpen2 = false;
  comments!: CommentData[];
  token: any = this.authService.getToken();
  userEmail: string | null = null;
  idComentarioSeleccionado: number | null = null;
  

  @ViewChild(MapComponent) mapComponent!: MapComponent;
  routerSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private chaletsService: ChaletsService,
    public authService: AuthService,
    public chaletIdService: ChaletIdService,
    public tarifaService: TarifaService,
    private personCountService: CountPeopleService,
    private router: Router,
    private fb: FormBuilder,
    private commentService:CommentService
  ) {}

  ngOnInit(): void {
    this.authService.getUserEmail().then(email => {
      this.userEmail = email;

    });
    this.loadChalet();
    
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url !== this.route.snapshot.url.join('/')) {
          // Elimina la variable de localStorage cuando se navega fuera de la página actual
          localStorage.removeItem('miVariable');
          console.log('Variable miVariable eliminada del localStorage');
        }
      }

    });

    this.commentService.getChaletsComments(this.id_chalet).then(
      (data: CommentData[]) => {
        console.log('Datos del comentario:', data);
        this.comments = data;
      },
      err => console.error(err)
    )
  }

  
  

  ngAfterViewInit(): void {
    if (this.chalet.ubicacion_chalet && this.chalet.municipio_chalet) {
      const ubicacionCompleta = `${this.chalet.ubicacion_chalet}, ${this.chalet.municipio_chalet}`;
      console.log(ubicacionCompleta,2345);
      
      this.mapComponent.loadLocationFromBackend(ubicacionCompleta);
    }
  }  

  loadChalet(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.chaletsService.getChaletById(id)
        .then(chalet => {
          this.chalet = chalet;

          const imagenesKeys = Object.keys(this.chalet.imagenes);
          if (imagenesKeys.length > 0) {
            this.firstImage = this.chalet.imagenes[imagenesKeys[0]];
            this.restOfImages = imagenesKeys.slice(1).map(key => this.chalet.imagenes[key]);
          } else {
            this.firstImage = null;
            this.restOfImages = [];
          }

          if (this.chalet.ubicacion_chalet) {
            setTimeout(() => {
              this.mapComponent.loadLocationFromBackend(this.chalet.ubicacion_chalet);
            }, 0);
          }

          this.loading = false;

          this.chaletIdService.setChaletId(id);
        })
        .catch(error => {
          this.error = 'Error al cargar el chalet';
          this.loading = false;
        });
    } else {
      this.error = 'ID del chalet no proporcionado';
      this.loading = false;
    }
  }

  mostrarBotones() {
    this.botones = true;
  }

  ocultarBotones() {
    this.botones = false;
  }

  seleccionarTarifa(tarifa: any) {
    this.tarifaSeleccionada = tarifa;
    this.tarifaService.setTarifaSeleccionada(tarifa);
  }

  updateTotalPersons() {
    this.totalPersons = this.adultCount + this.childCount;
    this.personCountService.setTotalPersons(this.totalPersons); // Actualiza el servicio con el total de personas
  }

  onAdultCountChange(count: number): void {
    this.adultCount = count;
    this.updateTotalPersons(); // Llama a updateTotalPersons para actualizar totalPersons
  }

  onChildCountChange(count: number): void {
    this.childCount = count;
    this.updateTotalPersons(); // Llama a updateTotalPersons para actualizar totalPersons
  }

  continuarReserva() {

    this.adultCount = 0;
    this.childCount = 0;
    this.updateTotalPersons(); // Actualiza el servicio con el nuevo total de personas

    console.log('Total de personas después de reiniciar:', this.totalPersons);
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
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

  closeErrorAlert(): void {
    this.isErrorAlertOpen = false;
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

  
  eliminarComentario(idComentario: number, tipoEntidad: string) {
    if (tipoEntidad === 'chalet') {
      this.eliminarComentarioChalet(idComentario);
    }
  }

  eliminarComentarioChalet(idComentario: number): void {
    this.isLoading = true;
    console.log('Eliminando comentario con ID:', idComentario);
    this.commentService.deleteCommentChalet(idComentario).subscribe(
      response => {
        this.isLoading = false;
        console.log('Comentario eliminado con éxito:', response);
        this.openUpdateSuccessAlert2();
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      },
      error => {
        this.isLoading = false;
        console.error('Error al eliminar comentario:', error);
        this.openErrorAlert2();
        setTimeout(() => {
          this.closeErrorAlert2();// Redirigir al home después de 2 segundos
        }, 2000);
      }
    );
  }

  openAlert2(): void {
    this.isAlertOpen2 = true;
  }

  closeAlert2(): void {
    this.isAlertOpen2 = false;
  }

  openErrorAlert2(): void {
    this.isErrorAlertOpen2 = true;
  }

  closeErrorAlert2(): void {
    this.isErrorAlertOpen2 = false;
  }

  openWarningAlert2(idComentario: number): void {
    this.idComentarioSeleccionado = idComentario; // Almacenar el ID del comentario
    this.isWarningAlertOpen2 = true; // Abrir el modal de advertencia
  }

  closeWarningAlert2(): void {
    this.isWarningAlertOpen2 = false;
    this.idComentarioSeleccionado = null; // Limpiar el ID seleccionado al cerrar
  }

  openUpdateSuccessAlert2(): void {
    this.isUpdateSuccessAlertOpen2 = true;
  }

  closeUpdateSuccessAlert2(): void {
    this.isUpdateSuccessAlertOpen2 = false;
  }

  onConfirmModal2(): void {
    if (this.idComentarioSeleccionado !== null) {
      this.eliminarComentario(this.idComentarioSeleccionado, 'chalet');
      this.closeWarningAlert2(); 
    }
  }
}
