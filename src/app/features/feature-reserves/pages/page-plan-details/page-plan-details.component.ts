import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../feature-login/services/auth.service';
import { MapComponent } from '../../../feature-profile/components/map/map.component';
import { PlanInfo } from '../../models/plansById';
import { CountPeopleService } from '../../services/count-people.service';
import { PlanIdService } from '../../services/plan-id.service';
import { PlansService } from '../../../feature-profile/services/plans.service';
import { TarifaService } from '../../services/tarifa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentDataPlan } from '../../models/commentDataPlan.model';
import { CommentService } from '../../services/comment.service';


@Component({
  selector: 'app-page-plan-details',
  templateUrl: './page-plan-details.component.html',
  styleUrl: './page-plan-details.component.scss'
})
export class PagePlanDetailsComponent {
  botones = false;
  plan: PlanInfo = new PlanInfo(0, '', '', '', '', {}, []); 
  firstImage: string | null = null; 
  restOfImages: string[] = []; 
  loading: boolean = true;
  error: string | null = null;
  tarifaSeleccionada: any | null = null;
  totalPersons: number = 0;
  adultCount: number = 0;
  childCount: number = 0;
  id_plan = this.route.snapshot.paramMap.get('id');
  isLoading:boolean = false;
  isAlertOpen = false;
  isErrorAlertOpen = false;
  isWarningAlertOpen = false;
  isAlertOpen2 = false;
  isErrorAlertOpen2 = false;
  isWarningAlertOpen2 = false;
  isUpdateSuccessAlertOpen2 = false;
  isUpdateSuccessAlertOpen = false;
  comments!: CommentDataPlan[]; 
  userEmail: string | null = null;
  idComentarioSeleccionado: number | null = null;

  @ViewChild(MapComponent) mapComponent!: MapComponent;
  routerSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private plansService: PlansService,
    public authService: AuthService,
    public planIdService: PlanIdService,
    public tarifaService: TarifaService,
    private personCountService: CountPeopleService,
    private router: Router,
    private fb: FormBuilder,
    private commentService: CommentService
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

    this.commentService.getPlansComments(this.id_plan).then(
      (data: CommentDataPlan[]) => {
        console.log('Datos del comentario: ',data);
        this.comments = data
      },
      err => console.error(err)
    )

  }

  


  ngAfterViewInit(): void {
    if (this.plan.ubicacion_planV && this.plan.municipio_planV) {
      const ubicacionCompleta = `${this.plan.ubicacion_planV}, ${this.plan.municipio_planV}`;
      console.log(ubicacionCompleta,2345);
      
      this.mapComponent.loadLocationFromBackend(ubicacionCompleta);
    }
  }  

  loadChalet(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.plansService.getPlanById(id)
        .then(plan => {
          this.plan = plan;
         

          const imagenesKeys = Object.keys(this.plan.imagenes);
          if (imagenesKeys.length > 0) {
            this.firstImage = this.plan.imagenes[imagenesKeys[0]];
            this.restOfImages = imagenesKeys.slice(1).map(key => this.plan.imagenes[key]);
          } else {
            this.firstImage = null;
            this.restOfImages = [];
          }

          if (this.plan.ubicacion_planV) {
            setTimeout(() => {
              this.mapComponent.loadLocationFromBackend(this.plan.ubicacion_planV);
            }, 0);
          }

          this.loading = false;

          // Guarda el ID del chalet en el servicio
          this.planIdService.setPlanId(id);
        })
        .catch(error => {
          this.error = 'Error al cargar el plan';
          this.loading = false;
        });
    } else {
      this.error = 'ID del plan no proporcionado';
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
    if (tipoEntidad === 'plan') {
      this.eliminarComentarioPlan(idComentario);
    }
  }

  eliminarComentarioPlan(idComentario: number): void {
    this.isLoading = true;
    console.log('Eliminando comentario con ID:', idComentario);
    this.commentService.deleteCommentPlan(idComentario).subscribe(
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
          this.closeErrorAlert2(); // Redirigir al home después de 2 segundos
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
    this.idComentarioSeleccionado = idComentario; 
    this.isWarningAlertOpen2 = true; 
  }

  closeWarningAlert2(): void {
    this.isWarningAlertOpen2 = false;
    this.idComentarioSeleccionado = null;
  }

  openUpdateSuccessAlert2(): void {
    this.isUpdateSuccessAlertOpen2 = true;
  }

  closeUpdateSuccessAlert2(): void {
    this.isUpdateSuccessAlertOpen2 = false;
  }

  onConfirmModal2(): void {
    if (this.idComentarioSeleccionado !== null) {
      this.eliminarComentario(this.idComentarioSeleccionado, 'plan');
      this.closeWarningAlert2(); 
    }
  }
}
