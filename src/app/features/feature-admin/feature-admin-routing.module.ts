import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureAdminComponent } from './feature-admin.component';
import { AdminChaletsComponent } from './pages/admin-chalets/admin-chalets.component';
import { AdminPlanesComponent } from './pages/admin-planes/admin-planes.component';
import { UsersAdminComponent } from './pages/users-admin/users-admin.component';

const routes: Routes = [
  {path: 'administration-home', component: FeatureAdminComponent},
  {path: 'administration-chalets', component: AdminChaletsComponent},
  {path: 'administration-planes', component: AdminPlanesComponent},
  {path: 'administration-usuarios', component: UsersAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureAdminRoutingModule { 
  
}
