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
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileImgComponent } from './components/atoms/profile-img/profile-img.component';
import { LogoComponent } from './components/molecules/logo/logo.component';
import { SearchBarComponent } from './components/molecules/search-bar/search-bar.component';
import { ButtonProfileComponent } from './components/molecules/button-profile/button-profile.component';
import { NavComponent } from './components/molecules/nav/nav.component';
import { PaymentMethodButtonComponent } from './components/molecules/payment-method-button/payment-method-button.component';
import { ButtonComponent } from './components/molecules/button/button.component';
import { EmailInputComponent } from './components/atoms/email-input/email-input.component';
import { LoginRegisterInputComponent } from './components/atoms/login-register-input/login-register-input.component';
import { FooterLogoComponent } from './components/atoms/footer-logo/footer-logo.component';
import { FooterInputComponent } from './components/atoms/footer-input/footer-input.component';
import { CalificationBarComponent } from './components/atoms/calification-bar/calification-bar.component';
import { BackgroundInfoImageComponent } from './components/atoms/background-info-image/background-info-image.component';
import { ButtonPlusMinumComponent } from './components/atoms/button-plus-minum/button-plus-minum.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { CalificationCardComponent } from './components/atoms/calification-card/calification-card.component';
import { FavoriteIconComponent } from './components/atoms/favorite-icon/favorite-icon.component';
import { TitleCardComponent } from './components/atoms/title-card/title-card.component';
import { UbicationCardComponent } from './components/atoms/ubication-card/ubication-card.component';
import { CardCalificationComponent } from './components/molecules/card-calification/card-calification.component';
import { MigaDePanComponent } from './components/molecules/miga-de-pan/miga-de-pan.component';
import { ImgPrincipalChaletComponent } from './components/molecules/img-principal-chalet/img-principal-chalet.component';
import { CardComponent } from './components/molecules/card/card.component';
import { ChaletCardsComponent } from './components/organisms/chalet-cards/chalet-cards.component';
import { SliderComponent } from './components/molecules/slider/slider.component';
import { RecommendedCardComponent } from './components/molecules/recommended-card/recommended-card.component';
import { RecommendedsCardsComponent } from './components/organisms/recommendeds-cards/recommendeds-cards.component';
import { CardPlanComponent } from './components/molecules/card-plan/card-plan.component';
import { PlanCardsComponent } from './components/organisms/plan-cards/plan-cards.component';
import { ButtonMethodPaymentComponent } from './components/atoms/button-method-payment/button-method-payment.component';
import { SelectorMethodPaymentComponent } from './components/atoms/selector-method-payment/selector-method-payment.component';
import { AlertComponent } from './components/templates/alert/alert.component';
import { PricesTableComponent } from './components/molecules/prices-table/prices-table.component';
import { NavegationMapComponent } from './components/molecules/navegation-map/navegation-map.component';
import { IconServicesComponent } from './components/atoms/icon-services/icon-services.component';
import { ServiceInComponent } from './components/molecules/service-in/service-in.component';
import { CountPeoppleComponent } from './components/atoms/count-peopple/count-peopple.component';
import { PeoppleCountInfoComponent } from './components/molecules/peopple-count-info/peopple-count-info.component';
import { ButtonPlusMoreComponent } from './components/atoms/button-plus-more/button-plus-more.component';
import { RecuadroPrecioCalculoComponent } from './components/molecules/recuadro-precio-calculo/recuadro-precio-calculo.component';
import { ChaletViewImagesComponent } from './components/molecules/chalet-view-images/chalet-view-images.component';
import { CollageViewComponent } from './components/molecules/collage-view/collage-view.component';
import { MessagesWarningComponent } from './components/templates/messages-warning/messages-warning.component';
import { MessagesErrorComponent } from './components/templates/messages-error/messages-error.component';
import { TittleMessagesComponent } from './components/atoms/tittle-messages/tittle-messages.component';
import { ParagraphMessagesComponent } from './components/atoms/paragraph-messages/paragraph-messages.component';
import { MessagesSuccesfulComponent } from './components/templates/messages-succesful/messages-succesful.component';
import { ModalReservesComponent } from './components/templates/modal-reserves/modal-reserves.component';
import { ModalUpdateComponent } from './components/templates/modal-update/modal-update.component';
import { MoneyComponent } from './components/molecules/money/money.component';
import { RegisterButtonComponent } from './components/molecules/register-button/register-button.component';
import { FeatureProfileComponent } from '../features/feature-profile/feature-profile.component';
import { ProfileHeaderComponent } from '../features/feature-profile/components/profile-header/profile-header.component';
import { VentajaServicioComponent } from './components/molecules/ventaja-servicio/ventaja-servicio.component';
import { ModalEmailComponent } from './components/templates/modal-email/modal-email.component';
import { HeaderLogueadoComponent } from './components/organisms/header-logueado/header-logueado.component';
import { NavLogueadoComponent } from './components/molecules/nav-logueado/nav-logueado.component';

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
    EmailInputComponent,
    LoginRegisterInputComponent,
    FooterLogoComponent,
    FooterInputComponent,
    CalificationBarComponent,
    BackgroundInfoImageComponent,
    ButtonPlusMinumComponent,
    FooterComponent,
    CalificationCardComponent,
    FavoriteIconComponent,
    TitleCardComponent,
    UbicationCardComponent,
    CardCalificationComponent,
    MigaDePanComponent,
    ImgPrincipalChaletComponent,
    CalificationCardComponent,
    CardComponent,
    ChaletCardsComponent,
    SliderComponent,
    RecommendedCardComponent,
    RecommendedsCardsComponent,
    CardPlanComponent,
    PlanCardsComponent,
    ButtonMethodPaymentComponent,
    SelectorMethodPaymentComponent,
    AlertComponent,
    PricesTableComponent,
    NavegationMapComponent,
    IconServicesComponent,
    ServiceInComponent,
    CountPeoppleComponent,
    ButtonComponent,
    PeoppleCountInfoComponent,
    ButtonPlusMoreComponent,
    RecuadroPrecioCalculoComponent,
    ChaletViewImagesComponent,
    CollageViewComponent,
    MessagesWarningComponent,
    MessagesErrorComponent,
    TittleMessagesComponent,
    ParagraphMessagesComponent,
    MessagesSuccesfulComponent,
    ModalReservesComponent,
    ModalUpdateComponent,
    MoneyComponent,
    RegisterButtonComponent,
    ProfileHeaderComponent,
    VentajaServicioComponent,
    ModalEmailComponent,
    HeaderLogueadoComponent,
    NavLogueadoComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'profile', component: FeatureProfileComponent },
      { path: 'chalets', component: FooterInputComponent },
      { path: 'planes-vacacionales', component: SearchButtonComponent },
      { path: 'reservas', component: SearchButtonComponent },
    ]),
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [
    ProfileButtonComponent,
    ProfileImgComponent,
    ReactiveFormsModule,
    SearchButtonComponent,
    SearchButtonComponent,
    WhatInputComponent,
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    LoginRegisterInputComponent,
    WhereInputComponent,
    ButtonProfileComponent,
    LogoComponent,
    ButtonComponent,
    SearchBarComponent,
    HeaderComponent,
    ModalComponent,
    EmailInputComponent,
    FooterInputComponent,
    FooterLogoComponent,
    FooterComponent,
    TitleCardComponent,
    UbicationCardComponent,
    FavoriteIconComponent,
    CalificationCardComponent,
    ButtonPlusMinumComponent,
    CalificationBarComponent,
    CardCalificationComponent,
    MigaDePanComponent,
    CardComponent,
    ChaletCardsComponent,
    SliderComponent,
    RecommendedCardComponent,
    RecommendedsCardsComponent,
    PlanCardsComponent,
    ButtonMethodPaymentComponent,
    SelectorMethodPaymentComponent,
    AlertComponent,
    PricesTableComponent,
    NavegationMapComponent,
    IconServicesComponent,
    ServiceInComponent,
    CountPeoppleComponent,
    PeoppleCountInfoComponent,
    RecuadroPrecioCalculoComponent,
    ChaletViewImagesComponent,
    CollageViewComponent,
    MessagesWarningComponent,
    MessagesErrorComponent,
    TittleMessagesComponent,
    ParagraphMessagesComponent,
    MessagesSuccesfulComponent,
    ModalReservesComponent,
    ProfileHeaderComponent,
    VentajaServicioComponent,
    ModalEmailComponent,
    HeaderLogueadoComponent
  ],
})
export class SharedModule { }