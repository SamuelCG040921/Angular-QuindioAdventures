// src/app/features/features.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureReservesComponent } from './feature-reserves/feature-reserves.component';
import { ScopedReserveComponent } from './feature-reserves/components/scoped-reserve/scoped-reserve.component';
import { FeatureReservesModule } from './feature-reserves/feature-reserves.module';

@NgModule({
  declarations: [
    FeatureReservesComponent,
  ],
  imports: [
    CommonModule,
    FeatureReservesModule
  ],
  exports: [
    FeatureReservesComponent,
  ]
})
export class FeaturesModule { }
