import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../feature-login/services/auth.service';
import { UserProfile } from '../../../feature-profile/models/user-profile';
import { CommentInfo } from '../../models/comment.model';
import { ChaletIdService } from '../../services/chalet-id.service';
import { ChaletsService } from '../../services/chalets.service';
import { CommentService } from '../../services/comment.service';
import { CountPeopleService } from '../../services/count-people.service';
import { TarifaService } from '../../services/tarifa.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss'
})
export class CommentFormComponent implements OnInit {
botones = false;
user!: UserProfile;
commentForm!:FormGroup;
id_chalet = this.route.snapshot.paramMap.get('id');
selectedRating: number = 0;
isLoading: boolean = false;
isAlertOpen = false;
isErrorAlertOpen = false;
isErrorAlertOpen2 = false;
isWarningAlertOpen = false;
isUpdateSuccessAlertOpen = false;
token: any = this.authService.getToken();

constructor(
  private route: ActivatedRoute,
  private chaletsService: ChaletsService,
  private authService: AuthService,
  public chaletIdService: ChaletIdService,
  public tarifaService: TarifaService,
  private personCountService: CountPeopleService,
  private router: Router,
  private fb: FormBuilder,
  private commentService:CommentService
) {}

ngOnInit(): void {
  this.authService.getUserProfile().then(
    (data: UserProfile) => {
      console.log('Datos del usuario:', data);
      this.user = data;
      
    },
    err => console.error(err,2345)
    
  );

  this.commentForm = this.fb.group({
    id_chalet: [this.id_chalet],
    opinion: ['', Validators.required],
    calificacion: [this.selectedRating]
  });
}

onRatingChange(rating: number) {
  this.selectedRating = rating;
  console.log('Calificación seleccionada:', this.selectedRating);

  if (this.commentForm) {  // Asegúrate de que el formulario esté inicializado
    this.commentForm.patchValue({
      calificacion: this.selectedRating
    });
  }

}

mostrarBotones() {
  this.botones = true;
}

ocultarBotones() {
  this.botones = false;
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

onSubmit(){
  if(this.commentForm.valid){
    this.isLoading = true;
    const commentData: CommentInfo = this.commentForm.value;
    console.log(commentData);

    this.commentService.createComment(commentData).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log('Comentario registrado exitosamente:', response);
        this.openUpdateSuccessAlert();
        setTimeout(() => {
          window.location.reload();
        }, 1300);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error al registrar comentario: ', error);
        this.openErrorAlert();
        
      }
    })
    
  }else{
    console.log('El formulario no es válido');
    this.openErrorAlert();
  }
}
}
