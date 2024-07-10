// src/app/app.module.ts
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureReservesRoutingModule } from './features/feature-reserves/feature-reserves-routing.module';
import { FeatureReservesModule } from './features/feature-reserves/feature-reserves.module';
import { SharedModule } from './shared/shared.module';
import { PageMainChaletComponent } from './features/pages/page-main-chalet/page-main-chalet.component';
import { FeatureChaletsComponent } from './features/feature-chalets/feature-chalets.component';

@NgModule({
  declarations: [
    AppComponent,
    PageMainChaletComponent,
    FeatureChaletsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureReservesModule,
    FeatureReservesRoutingModule,
    SharedModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
