import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureLoginRoutingModule } from './feature-login-routing.module';
import { FeatureLoginComponent } from './feature-login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ImgLoginComponent } from './components/img-login/img-login.component';
import { LoginWithComponent } from './components/login-with/login-with.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    FeatureLoginComponent,
    FormLoginComponent,
    ImgLoginComponent,
    LoginWithComponent
  ],
  imports: [
    CommonModule,
    FeatureLoginRoutingModule,
    SharedModule
  ],
  exports: [
    FeatureLoginComponent
  ]
})
export class FeatureLoginModule { }
