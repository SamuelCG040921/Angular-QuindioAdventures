import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureReservesRoutingModule } from './feature-reserves-routing.module';
import { FeatureReservesComponent } from './feature-reserves.component';
import { ScopedReserveComponent } from './components/scoped-reserve/scoped-reserve.component';
import { ScopedTableReservesComponent } from './components/scoped-table-reserves/scoped-table-reserves.component';


@NgModule({
  declarations: [
    FeatureReservesComponent,
    ScopedReserveComponent,
    ScopedTableReservesComponent,
    
  ],
  imports: [
    CommonModule,
    FeatureReservesRoutingModule,
  ],
  exports: [
    FeatureReservesComponent,
    ScopedReserveComponent,
    ScopedTableReservesComponent
  ]
})
export class FeatureReservesModule { }
