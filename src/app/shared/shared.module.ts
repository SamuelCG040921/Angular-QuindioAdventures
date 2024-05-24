import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileImgComponent } from './components/atoms/profile-img/profile-img.component';
import { RouterModule } from '@angular/router';
import { ProfileButtonComponent } from './components/atoms/profile-button/profile-button.component';
import { SearchButtonComponent } from './components/atoms/search-button/search-button.component';
import { WhatInputComponent } from './components/atoms/what-input/what-input.component';
import { WhereInputComponent } from './components/atoms/where-input/where-input.component';



@NgModule({
  declarations: [
    ProfileButtonComponent,
    ProfileImgComponent,
    SearchButtonComponent,
    WhatInputComponent,
    WhereInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'profile', component: SearchButtonComponent }
    ])
  ],
  exports: [
    ProfileButtonComponent,
    ProfileImgComponent
  ]
})
export class SharedModule { }
