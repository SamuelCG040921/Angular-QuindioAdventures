import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAdminRoutingModule } from './feature-admin-routing.module';
import { FeatureAdminComponent } from './feature-admin.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { FeatureLoginModule } from '../feature-login/feature-login.module';
import { UsersAdminComponent } from './pages/users-admin/users-admin.component';
import { AdminChaletsComponent } from './pages/admin-chalets/admin-chalets.component';
import { AdminPlanesComponent } from './pages/admin-planes/admin-planes.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { UserRowComponent } from './components/user-row/user-row.component';
import { TableUsersComponent } from './components/table-users/table-users.component';


@NgModule({
  declarations: [
    FeatureAdminComponent,
    LoginAdminComponent,
    UsersAdminComponent,
    AdminChaletsComponent,
    AdminPlanesComponent,
    AdminHeaderComponent,
    UserRowComponent,
    TableUsersComponent,
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
