import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureAdminRoutingModule } from './feature-admin-routing.module';
import { FeatureAdminComponent } from './feature-admin.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';


@NgModule({
  declarations: [
    FeatureAdminComponent,
    AdminProfileComponent,
  ],
  imports: [
    CommonModule,
    FeatureAdminRoutingModule,
    SharedModule
  ],
  exports: [
    FeatureAdminComponent
  ]
})
export class FeatureAdminModule { }
