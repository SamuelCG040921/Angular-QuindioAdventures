import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturePlansRoutingModule } from './feature-plans-routing.module';
import { FeaturePlansComponent } from './feature-plans.component';
import { PagePlanComponent } from './pages/page-plan/page-plan.component';
import { SharedModule } from '../../shared/shared.module';
import { PagePlanDetailsComponent } from './pages/page-plan-details/page-plan-details.component';


@NgModule({
  declarations: [
    FeaturePlansComponent,
    PagePlanComponent,
    PagePlanDetailsComponent
  ],
  imports: [
    CommonModule,
    FeaturePlansRoutingModule,
    SharedModule
  ]
})
export class FeaturePlansModule { }
