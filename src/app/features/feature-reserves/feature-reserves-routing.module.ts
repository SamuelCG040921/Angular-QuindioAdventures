import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageReservesClientsComponent } from './pages/page-reserves-clients/page-reserves-clients.component';
import { PageReservesReservesComponent } from './pages/page-reserves-reserves/page-reserves-reserves.component';

const routes: Routes = [
  {path:'reserves-clients', component: PageReservesClientsComponent},
  {path:'reserves-reserves', component: PageReservesReservesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureReservesRoutingModule { }
