import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureReservesRoutingModule } from './feature-reserves-routing.module';
import { FeatureReservesComponent } from './feature-reserves.component';
import { ScopedReserveComponent } from './components/scoped-reserve/scoped-reserve.component';
import { ScopedTableReservesComponent } from './components/scoped-table-reserves/scoped-table-reserves.component';
import { ScopedTableClientsComponent } from './components/scoped-table-clients/scoped-table-clients.component';
import { ScopedClientComponent } from './components/scoped-client/scoped-client.component';
import { ScopedBackgroundMenuComponent } from './components/scoped-background-menu/scoped-background-menu.component';
import { PageReservesClientsComponent } from './pages/page-reserves-clients/page-reserves-clients.component';
import { SharedModule } from '../../shared/shared.module';
import { PageReservesReservesComponent } from './pages/page-reserves-reserves/page-reserves-reserves.component';
import { PageChaletDetailsComponent } from './pages/page-chalet-details/page-chalet-details.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageChaletPaymentComponent } from './pages/page-chalet-payment/page-chalet-payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageHomeUserComponent } from './pages/page-home-user/page-home-user.component';
import { PageChaletMethodComponent } from './pages/page-chalet-method/page-chalet-method.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  declarations: [
    FeatureReservesComponent,
    ScopedReserveComponent,
    ScopedTableReservesComponent,
    ScopedTableClientsComponent,
    ScopedClientComponent,
    ScopedBackgroundMenuComponent,
    PageReservesClientsComponent,
    PageReservesReservesComponent,
    PageChaletDetailsComponent,
    PageHomeComponent,
    PageChaletPaymentComponent,
    PageHomeUserComponent,
    PageChaletMethodComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    FeatureReservesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    FeatureReservesComponent,
    ScopedReserveComponent,
    ScopedTableReservesComponent,
    ScopedClientComponent,
    ScopedTableClientsComponent,
    ScopedBackgroundMenuComponent,
    PageReservesClientsComponent,
    PageReservesReservesComponent,
    PageChaletPaymentComponent,
    PageChaletDetailsComponent,
    PageChaletMethodComponent,
    ProgressComponent
  ]
})
export class FeatureReservesModule { }
