import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureRegisterComponent } from './feature-register.component';
import { SharedModule } from '../../shared/shared.module';
import { FeatureRegisterRoutingModule } from './feature-register-routing.module';

@NgModule({
  declarations: [
    FeatureRegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FeatureRegisterRoutingModule
  ],
  exports: [
    FeatureRegisterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureRegisterModule { }
