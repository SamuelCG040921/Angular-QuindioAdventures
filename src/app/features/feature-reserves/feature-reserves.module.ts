import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureReservesRoutingModule } from './feature-reserves-routing.module';

import { FeatureReservesComponent } from './feature-reserves.component';


@NgModule({
  declarations: [
    FeatureReservesComponent
  ],
  imports: [
    CommonModule,
    FeatureReservesRoutingModule
  ],
  exports: [
    FeatureReservesComponent
  ]
})
export class FeatureReservesModule { }
