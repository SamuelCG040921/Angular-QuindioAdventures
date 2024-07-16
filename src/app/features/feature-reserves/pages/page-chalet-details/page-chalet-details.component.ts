import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page-chalet-details',
  templateUrl: './page-chalet-details.component.html',
  styleUrl: './page-chalet-details.component.scss'
})
export class PageChaletDetailsComponent implements OnInit{
  botones = false

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('codigo');
    // Obtener la información del chalet o plan usando el ID
  }
  
  mostrarBotones (){
    this.botones = true
  }

  ocultarBotones (){
    this.botones = false
  }

}
