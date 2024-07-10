import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FeatureRegisterComponent } from './feature-register.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    RegisterFormComponent,
    FeatureRegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    RegisterFormComponent,
    FeatureRegisterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureRegisterModule { }
