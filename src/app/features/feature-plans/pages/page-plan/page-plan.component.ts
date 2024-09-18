import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';
import { PlansService } from '../../../feature-profile/services/plans.service';
import { PlansDetails } from '../../../feature-reserves/models/plans.model';
import { SearchService } from '../../../feature-reserves/services/search.service';

@Component({
  selector: 'app-page-plan',
  templateUrl: './page-plan.component.html',
  styleUrl: './page-plan.component.scss'
})
export class PagePlanComponent implements OnInit {
  planesPage! : PlansDetails[];
constructor(public authService:AuthService,  private plansService: PlansService, private searchService: SearchService){}

loadAllPlans(){
  this.plansService.getPlansConnection().then(
    (data: PlansDetails[]) => {
      console.log('Datos del plan:', data);
      this.planesPage = data;
    },
    err => console.error(err)
    
  );
}

ngOnInit() {
    this.loadAllPlans();
}

onSearch(term: string){
  console.log('hola', term);
  
  if(term.trim() == ''){
    this.loadAllPlans();
    
  } else{
    this.searchService.getSearchResults(term).then(results => {
      console.log(results.data.plans);
      
        this.planesPage = results.data.plans
  
    })
  }
}

}
