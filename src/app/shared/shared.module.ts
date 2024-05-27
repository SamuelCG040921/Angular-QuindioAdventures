import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { ModalComponent } from './components/templates/modal/modal.component';




@NgModule({
  declarations: [
   
  
    ModalComponent
=======
import { ProfileButtonComponent } from './components/atoms/profile-button/profile-button.component';
import { SearchButtonComponent } from './components/atoms/search-button/search-button.component';
import { WhatInputComponent } from './components/atoms/what-input/what-input.component';
import { WhereInputComponent } from './components/atoms/where-input/where-input.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfileImgComponent } from './components/atoms/profile-img/profile-img.component';

@NgModule({
  declarations: [
    ProfileButtonComponent,
    ProfileImgComponent,
    SearchButtonComponent,
    WhatInputComponent,
    WhereInputComponent,
>>>>>>> feature/atoms
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'profile', component: SearchButtonComponent }
    ]),
    FormsModule
  ],
  
  
  exports: [
    ProfileButtonComponent,
    ProfileImgComponent,
    SearchButtonComponent,
    SearchButtonComponent,
    WhatInputComponent,
    WhereInputComponent
  ],
})
export class SharedModule { }
