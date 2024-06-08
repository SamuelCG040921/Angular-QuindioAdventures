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
  ],
  imports: [
    CommonModule,
    FeatureReservesRoutingModule,
    SharedModule
  ],
  exports: [
    FeatureReservesComponent,
    ScopedReserveComponent,
    ScopedTableReservesComponent,
    ScopedClientComponent,
    ScopedTableClientsComponent,
    ScopedBackgroundMenuComponent,
    PageReservesClientsComponent,
    PageReservesReservesComponent
  ]
})
export class FeatureReservesModule { }
