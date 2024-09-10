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
import { UserProfile } from '../../../feature-profile/models/user-profile';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { Chalet } from '../../models/chalet.model';

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
  user!: UserProfile;
  commentForm!: FormGroup;
  id_chalet = this.route.snapshot.paramMap.get('id');
  selectedRating: number = 0;

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
    this.loadChalet();
    
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url !== this.route.snapshot.url.join('/')) {
          // Elimina la variable de localStorage cuando se navega fuera de la página actual
          localStorage.removeItem('miVariable');
          console.log('Variable miVariable eliminada del localStorage');
        }
      }

      this.commentForm = this.fb.group({
        id_chalet: [this.id_chalet, Validators.required],
        comment: ['', Validators.required]
      })
    });

    this.authService.getUserProfile().then(
      (data: UserProfile) => {
        console.log('Datos del usuario:', data);
        this.user = data;
        
      },
      err => console.error(err,2345)
      
    );
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

          // Guarda el ID del chalet en el servicio
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

  onRatingChange(rating: number): void {
    this.selectedRating = rating;
    console.log('Calificación seleccionada:', this.selectedRating);
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
    // Lógica para continuar con la reserva aquí
    
    // Reiniciar los contadores
    this.adultCount = 0;
    this.childCount = 0;
    this.updateTotalPersons(); // Actualiza el servicio con el nuevo total de personas

    // Mostrar en consola el total de personas después de reiniciar
    console.log('Total de personas después de reiniciar:', this.totalPersons);
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  onSubmit(){
    
  }
}
