import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureAdminRoutingModule } from './feature-admin-routing.module';
import { FeatureAdminComponent } from './feature-admin.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminSearchBarComponent } from './components/admin-search-bar/admin-search-bar.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { FeatureLoginModule } from '../feature-login/feature-login.module';


@NgModule({
  declarations: [
    FeatureAdminComponent,
    AdminSearchBarComponent,
    LoginAdminComponent,
  ],
  imports: [
    CommonModule,
    FeatureAdminRoutingModule,
    SharedModule,
    FeatureLoginModule
  ],
  exports: [
    FeatureAdminComponent,
    LoginAdminComponent
  ]
})
export class FeatureAdminModule { }
