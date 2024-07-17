import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureReservesComponent } from './features/feature-reserves/feature-reserves.component';
import { PageHomeComponent } from './features/feature-reserves/pages/page-home/page-home.component';
import { FeatureLoginComponent } from './features/feature-login/feature-login.component';
import { FeatureRegisterComponent } from './features/feature-register/feature-register.component';
import { ChaletRegisterFormComponent } from './features/feature-profile/pages/chalet-register-form/chalet-register-form.component';

const routes: Routes = [
  {path:'reservas', component: FeatureReservesComponent},
  {path:'', component: PageHomeComponent},
  {path:'login', component: FeatureLoginComponent},
  {path: 'register', component: FeatureRegisterComponent},
  {path: 'create-chalet', component: ChaletRegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
