import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePlanDetailsComponent } from './pages/page-plan-details/page-plan-details.component';

const routes: Routes = [
  { path: 'plan-details', component: PagePlanDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturePlansRoutingModule {


 }
