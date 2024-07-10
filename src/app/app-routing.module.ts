import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureReservesComponent } from './features/feature-reserves/feature-reserves.component';
import { PageHomeComponent } from './features/feature-reserves/pages/page-home/page-home.component';
import { PageChaletComponent } from './features/feature-chalets/pages/page-chalet/page-chalet.component';

const routes: Routes = [
  {path:'reservas', component: FeatureReservesComponent},
  {path:'', component: PageHomeComponent},
  {path:'chalets', component: PageChaletComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
