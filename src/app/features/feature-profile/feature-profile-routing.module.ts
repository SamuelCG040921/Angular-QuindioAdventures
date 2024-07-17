import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureProfileComponent } from './feature-profile.component';

  const routes: Routes = [
    {path:'micuenta', component:FeatureProfileComponent},
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureProfileRoutingModule { }
