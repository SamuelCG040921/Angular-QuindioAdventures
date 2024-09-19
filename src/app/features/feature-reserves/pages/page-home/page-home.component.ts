import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../../feature-login/services/auth.service';
import { PlansService } from '../../../feature-profile/services/plans.service';
import { ChaletDetails } from '../../models/chalets.model';
import { PlansDetails } from '../../models/plans.model';
import { ChaletsService } from '../../services/chalets.service';
import { SearchService } from '../../services/search.service';
import { RecommendedService } from '../../services/recommended.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.scss'
})
export class PageHomeComponent implements OnInit{
  isMenuOpen = false;
  chalets! : ChaletDetails[];
  planes! : PlansDetails[];
  recommended! : ChaletDetails[];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  disguiseMenu(){
    this.isMenuOpen = false;
  }
constructor(private router: Router,public authService:AuthService, private chaletsService:ChaletsService, private searchService: SearchService,
   private plansService: PlansService, private recommendedService: RecommendedService){
  
}

loadAllPlans(){
  this.plansService.getPlansConnection().then(
    (data: PlansDetails[]) => {
      console.log('Datos del plan:', data);
      this.planes = data;
    },
    err => console.error(err)
    
  );
}

loadAllChalets(){
  this.chaletsService.getChaletsConnection().then(
    (data: ChaletDetails[]) => {
      console.log('Datos del chalet:', data);
      this.chalets = data;
    },
    err => console.error(err)
    
  );
}

loadRecommended(){
  this.recommendedService.getRecommendedConnection().then(
    (data: ChaletDetails[]) =>{
      console.log('Datos de los recomendados:', data);
      this.recommended = data
    },
    err => console.error(err)
  )
}

ngOnInit(){  
    this.loadAllChalets();
    this.loadAllPlans();
    this.loadRecommended();
}

onSearch(term: string){
  console.log('hola', term);
  
  if(term.trim() == ''){
    this.loadAllChalets();
    this.loadAllPlans();
  } else{
    this.searchService.getSearchResults(term).then(results => {
      console.log(results.data.chalets);
      
        this.chalets = results.data.chalets
        this.planes = results.data.plans
    })
  }
}

onSearch2(term: string){
  console.log('hola municipio', term);
  
  if(term.trim() == ''){
    this.loadAllChalets();
    this.loadAllPlans();
  } else{
    this.searchService.getSearchResultsMunicipio(term).then(results => {
      console.log(results.data.chalets);
      
        this.chalets = results.data.chalets
        this.planes = results.data.plans
    })
  }
}

}
