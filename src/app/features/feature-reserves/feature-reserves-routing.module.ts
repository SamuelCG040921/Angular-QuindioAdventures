import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageChaletDetailsComponent } from './pages/page-chalet-details/page-chalet-details.component';
import { PageChaletPaymentComponent } from './pages/page-chalet-payment/page-chalet-payment.component';
import { PageReservesClientsComponent } from './pages/page-reserves-clients/page-reserves-clients.component';
import { PageReservesReservesComponent } from './pages/page-reserves-reserves/page-reserves-reserves.component';
import { PageChaletMethodComponent } from './pages/page-chalet-method/page-chalet-method.component';
import { PagePlanDetailsComponent } from './pages/page-plan-details/page-plan-details.component';

const routes: Routes = [
  {path:'reserves-clients', component: PageReservesClientsComponent},
  {path:'reserves-reserves', component: PageReservesReservesComponent},
  {path:'chalet-details/:id', component: PageChaletDetailsComponent},
  {path:'paymentform', component:PageChaletPaymentComponent},
  {path:'method-payment', component:PageChaletMethodComponent},
  {path:'plan-details/:id', component: PagePlanDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureReservesRoutingModule { }
