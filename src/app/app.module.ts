import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureReservesModule } from './features/feature-reserves/feature-reserves.module';
import { FeatureReservesRoutingModule } from './features/feature-reserves/feature-reserves-routing.module';
import { SharedModule } from './shared/shared.module';
import { FeatureChaletsRoutingModule } from './features/feature-chalets/feature-chalets-routing.module';
import { FeatureChaletsModule } from './features/feature-chalets/feature-chalets.module';
import { FeaturePlansModule } from './features/feature-plans/feature-plans.module';
import { FeaturePlansRoutingModule } from './features/feature-plans/feature-plans-routing.module';
import { FeatureRegisterModule } from './features/feature-register/feature-register.module';
import { FeatureLoginModule } from './features/feature-login/feature-login.module';
import { FeatureProfileModule } from './features/feature-profile/feature-profile.module';
import { FeatureAdminModule } from './features/feature-admin/feature-admin.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    FeatureReservesModule,
    FeatureLoginModule,
    FeatureReservesRoutingModule,
    FeatureChaletsModule,
    FeatureChaletsRoutingModule,
    FeaturePlansModule,
    FeaturePlansRoutingModule,
    FeatureRegisterModule,
    FeatureLoginModule,
    FeatureProfileModule,
    SharedModule,
    FeatureAdminModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
