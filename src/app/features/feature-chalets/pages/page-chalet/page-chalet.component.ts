import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../feature-login/services/auth.service';
import { ChaletDetails } from '../../../feature-reserves/models/chalets.model';
import { ChaletsService } from '../../../feature-reserves/services/chalets.service';
import { SearchService } from '../../../feature-reserves/services/search.service';

@Component({
  selector: 'app-page-chalet',
  templateUrl: './page-chalet.component.html',
  styleUrl: './page-chalet.component.scss'
})
export class PageChaletComponent implements OnInit{

  chaletsPage! : ChaletDetails[];

  constructor(public authService: AuthService,  private chaletsService:ChaletsService, private searchService: SearchService){}

  loadAllChalets(){
    this.chaletsService.getChaletsConnection().then(
      (data: ChaletDetails[]) => {
        console.log('Datos del chalet:', data);
        this.chaletsPage = data;
      },
      err => console.error(err)
      
    );
  }

  ngOnInit() {
      this.loadAllChalets();
  }

  onSearch(term: string){
    console.log('hola', term);
    
    if(term.trim() == ''){
      this.loadAllChalets();
      
    } else{
      this.searchService.getSearchResults(term).then(results => {
        console.log(results.data.chalets);
        
          this.chaletsPage = results.data.chalets
    
      })
    }
  }
}
