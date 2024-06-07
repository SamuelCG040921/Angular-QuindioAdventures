import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/templates/modal/modal.component';
import { HeaderComponent } from './components/organisms/header/header.component';
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
import { EmailInputComponent } from './components/atoms/email-input/email-input.component';
import { LoginRegisterInputComponent } from './components/atoms/login-register-input/login-register-input.component';
import { CalificationCardComponent } from './components/atoms/calification-card/calification-card.component';
import { ImgCardComponent } from './components/atoms/img-card/img-card.component';
import { FavoriteIconComponent } from './components/atoms/favorite-icon/favorite-icon.component';
import { TitleCardComponent } from './components/atoms/title-card/title-card.component';
import { UbicationCardComponent } from './components/atoms/ubication-card/ubication-card.component';





@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent,
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
    ModalComponent,
    EmailInputComponent,
    LoginRegisterInputComponent,
    CalificationCardComponent,
    ImgCardComponent,
    FavoriteIconComponent,
    TitleCardComponent,
    UbicationCardComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'profile', component: SearchButtonComponent },
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
    SearchBarComponent,
    HeaderComponent,
    ModalComponent,
    EmailInputComponent,
    LoginRegisterInputComponent
  ],
})
export class SharedModule { }
