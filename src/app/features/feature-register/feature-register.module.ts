import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRegisterRoutingModule } from './feature-register-routing.module';
import { FeatureRegisterComponent } from './feature-register.component';


@NgModule({
  declarations: [
    FeatureRegisterComponent
  ],
  imports: [
    CommonModule,
    FeatureRegisterRoutingModule
  ]
})
export class FeatureRegisterModule { }
