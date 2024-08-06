import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureAdminRoutingModule } from './feature-admin-routing.module';
import { FeatureAdminComponent } from './feature-admin.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminSearchBarComponent } from './components/admin-search-bar/admin-search-bar.component';


@NgModule({
  declarations: [
    FeatureAdminComponent,
    AdminSearchBarComponent,
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
