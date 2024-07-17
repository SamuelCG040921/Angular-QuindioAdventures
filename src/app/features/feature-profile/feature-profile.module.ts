import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureProfileRoutingModule } from './feature-profile-routing.module';
import { FeatureProfileComponent } from './feature-profile.component';
import { SharedModule } from '../../shared/shared.module';
import { PlansProfileComponent } from './pages/plans-profile/plans-profile.component';

@NgModule({
  declarations: [
    FeatureProfileComponent,
    PlansProfileComponent,
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
