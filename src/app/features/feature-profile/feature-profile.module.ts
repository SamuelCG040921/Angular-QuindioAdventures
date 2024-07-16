import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureProfileRoutingModule } from './feature-profile-routing.module';
import { FeatureProfileComponent } from './feature-profile.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileAsideComponent } from './components/profile-aside/profile-aside.component';


@NgModule({
  declarations: [
    FeatureProfileComponent,
    ProfileAsideComponent
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
