import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureLoginRoutingModule } from './feature-login-routing.module';
import { FeatureLoginComponent } from './feature-login.component';


@NgModule({
  declarations: [
    FeatureLoginComponent
  ],
  imports: [
    CommonModule,
    FeatureLoginRoutingModule
  ]
})
export class FeatureLoginModule { }
