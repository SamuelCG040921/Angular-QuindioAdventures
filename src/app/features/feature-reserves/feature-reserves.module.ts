import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureReservesRoutingModule } from './feature-reserves-routing.module';
import { FeatureReservesComponent } from './feature-reserves.component';
import { ScopedReserveComponent } from './components/scoped-reserve/scoped-reserve.component';
import { ScopedTableReservesComponent } from './components/scoped-table-reserves/scoped-table-reserves.component';
import { ScopedTableClientsComponent } from './components/scoped-table-clients/scoped-table-clients.component';
import { ScopedClientComponent } from './components/scoped-client/scoped-client.component';


@NgModule({
  declarations: [
    FeatureReservesComponent,
    ScopedReserveComponent,
    ScopedTableReservesComponent,
    ScopedTableClientsComponent,
    ScopedClientComponent
    
  ],
  imports: [
    CommonModule,
    FeatureReservesRoutingModule,
  ],
  exports: [
    FeatureReservesComponent,
    ScopedReserveComponent,
    ScopedTableReservesComponent,
    ScopedClientComponent,
    ScopedTableClientsComponent
  ]
})
export class FeatureReservesModule { }
