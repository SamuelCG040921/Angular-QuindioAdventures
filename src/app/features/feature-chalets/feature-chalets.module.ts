import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureChaletsRoutingModule } from './feature-chalets-routing.module';
import { FeatureChaletsComponent } from './feature-chalets.component';


@NgModule({
  declarations: [
    FeatureChaletsComponent
  ],
  imports: [
    CommonModule,
    FeatureChaletsRoutingModule
  ]
})
export class FeatureChaletsModule { }
