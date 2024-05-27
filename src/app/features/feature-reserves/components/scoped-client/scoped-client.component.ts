import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoped-client',
  templateUrl: './scoped-client.component.html',
  styleUrl: './scoped-client.component.scss'
})
export class ScopedClientComponent implements OnInit{
@Input() client ={
  id: 0,
  code: '',
  client: '',
  date: '',
  adress: '',
  email: '',
  phone: '',
  price: 0
}
constructor(){}

ngOnInit() {
    
}
}
