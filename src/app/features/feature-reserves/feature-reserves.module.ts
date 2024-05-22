import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureReservesRoutingModule } from './feature-reserves-routing.module';
import { MyComponentComponent } from './feature-reserves/my-component.component';
import { FeatureReservesComponent } from './feature-reserves.component';


@NgModule({
  declarations: [
    MyComponentComponent,
    FeatureReservesComponent
  ],
  imports: [
    CommonModule,
    FeatureReservesRoutingModule
  ]
})
export class FeatureReservesModule { }
