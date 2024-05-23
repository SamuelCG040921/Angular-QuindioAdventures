import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/molecules/logo/logo.component';
import { SearchBarComponent } from './components/molecules/search-bar/search-bar.component';
import { ButtonProfileComponent } from './components/molecules/button-profile/button-profile.component';
import { NavComponent } from './components/molecules/nav/nav.component';



@NgModule({
  declarations: [
    LogoComponent,
    SearchBarComponent,
    ButtonProfileComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
