import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureProfileRoutingModule } from './feature-profile-routing.module';
import { FeatureProfileComponent } from './feature-profile.component';
import { SharedModule } from '../../shared/shared.module';
import { ChaletRegisterFormComponent } from './pages/chalet-register-form/chalet-register-form.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

@NgModule({
  declarations: [
    FeatureProfileComponent,
    ChaletRegisterFormComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    FeatureProfileRoutingModule,
    SharedModule
  ],
  exports: [
    FeatureProfileComponent
  ]
})
export class FeatureProfileModule { }