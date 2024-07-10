import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureRegisterComponent } from './features/feature-register/feature-register.component';
import { FeatureReservesModule } from './features/feature-reserves/feature-reserves.module';
import { FeatureReservesRoutingModule } from './features/feature-reserves/feature-reserves-routing.module';
import { SharedModule } from './shared/shared.module';
import { FeatureRegisterModule } from './features/feature-register/feature-register.module';
import { FeatureLoginModule } from './features/feature-login/feature-login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    FeatureReservesModule,
    FeatureLoginModule,
    FeatureReservesRoutingModule,
    FeatureRegisterModule,
    FeatureLoginModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
