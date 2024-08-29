import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureChaletsRoutingModule } from './feature-chalets-routing.module';
import { FeatureChaletsComponent } from './feature-chalets.component';
import { PageChaletComponent } from './pages/page-chalet/page-chalet.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    FeatureChaletsComponent,
    PageChaletComponent
  ],
  imports: [
    CommonModule,
    FeatureChaletsRoutingModule,
    SharedModule
  ]
})
export class FeatureChaletsModule { }
