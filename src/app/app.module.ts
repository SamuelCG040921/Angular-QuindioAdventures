// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureReservesModule } from './features/feature-reserves/feature-reserves.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureReservesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
