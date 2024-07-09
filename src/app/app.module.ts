// src/app/app.module.ts
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureReservesRoutingModule } from './features/feature-reserves/feature-reserves-routing.module';
import { FeatureReservesModule } from './features/feature-reserves/feature-reserves.module';
import { SharedModule } from './shared/shared.module';
import { FeatureRegisterComponent } from './features/feature-register/feature-register.component';
import { FeatureRegisterModule } from './features/feature-register/feature-register.module';
import { FeatureLoginModule } from './features/feature-login/feature-login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureReservesModule,
    FeatureReservesRoutingModule,
    FeatureRegisterModule,
    FeatureLoginModule,
    SharedModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
