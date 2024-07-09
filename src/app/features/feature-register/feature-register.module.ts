import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRegisterRoutingModule } from './feature-register-routing.module';
import { FeatureRegisterComponent } from './feature-register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { TermsComponent } from './components/terms/terms.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    FeatureRegisterComponent,
    RegisterFormComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    FeatureRegisterRoutingModule,
    SharedModule
  ],
  exports: [
    FeatureRegisterComponent
  ]
})
export class FeatureRegisterModule { }
