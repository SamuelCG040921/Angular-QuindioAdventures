import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileButtonComponent } from './components/atoms/profile-button/profile-button.component';
import { SearchButtonComponent } from './components/atoms/search-button/search-button.component';
import { WhatInputComponent } from './components/atoms/what-input/what-input.component';
import { WhereInputComponent } from './components/atoms/where-input/where-input.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfileImgComponent } from './components/atoms/profile-img/profile-img.component';
import { LogoComponent } from './components/molecules/logo/logo.component';
import { SearchBarComponent } from './components/molecules/search-bar/search-bar.component';
import { ButtonProfileComponent } from './components/molecules/button-profile/button-profile.component';
import { NavComponent } from './components/molecules/nav/nav.component';
import { PaymentMethodButtonComponent } from './components/molecules/payment-method-button/payment-method-button.component';
import { ButtonComponent } from './components/molecules/button/button.component';



@NgModule({
  declarations: [
    LogoComponent,
    SearchBarComponent,
    ButtonProfileComponent,
    NavComponent,
    PaymentMethodButtonComponent,
    ButtonComponent,
    ProfileButtonComponent,
    ProfileImgComponent,
    SearchButtonComponent,
    WhatInputComponent,
    WhereInputComponent,
    LogoComponent,

  ],

  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'profile', component: SearchButtonComponent },
      { path: '', component: SearchButtonComponent },
      { path: 'chalets', component: SearchButtonComponent },
      { path: 'planes-vacacionales', component: SearchButtonComponent },
      { path: 'reservas', component: SearchButtonComponent },
    ]),
    FormsModule
  ],

  exports: [
    ProfileButtonComponent,
    ProfileImgComponent,
    SearchButtonComponent,
    SearchButtonComponent,
    WhatInputComponent,
    WhereInputComponent,
    ButtonProfileComponent,
    LogoComponent,
    ButtonComponent,
    SearchBarComponent
  ],
})
export class SharedModule { }
