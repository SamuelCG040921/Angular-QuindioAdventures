import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureReservesRoutingModule } from './feature-reserves-routing.module';
import { FeatureReservesComponent } from './feature-reserves.component';
import { ScopedReserveComponent } from './components/scoped-reserve/scoped-reserve.component';
import { ScopedTableClientsComponent } from './components/scoped-table-clients/scoped-table-clients.component';
import { ScopedClientComponent } from './components/scoped-client/scoped-client.component';
import { ScopedBackgroundMenuComponent } from './components/scoped-background-menu/scoped-background-menu.component';
import { PageReservesClientsComponent } from './pages/page-reserves-clients/page-reserves-clients.component';
import { SharedModule } from '../../shared/shared.module';
import { PageReservesReservesComponent } from './pages/page-reserves-reserves/page-reserves-reserves.component';
import { PageChaletDetailsComponent } from './pages/page-chalet-details/page-chalet-details.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageChaletPaymentComponent } from './pages/page-chalet-payment/page-chalet-payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageHomeUserComponent } from './pages/page-home-user/page-home-user.component';
import { PageChaletMethodComponent } from './pages/page-chalet-method/page-chalet-method.component';
import { ProgressComponent } from './components/progress/progress.component';
import { FeatureProfileModule } from '../feature-profile/feature-profile.module';
import { PagePlanDetailsComponent } from './pages/page-plan-details/page-plan-details.component';
import { PagePlanPaymentComponent } from './pages/page-plan-payment/page-plan-payment.component';
import { ScopedReservePlanComponent } from './components/scoped-reserve-plan/scoped-reserve-plan.component';
import { ScopedClientPlanComponent } from './components/scoped-client-plan/scoped-client-plan.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentFormPlanComponent } from './components/comment-form-plan/comment-form-plan.component';

@NgModule({
  declarations: [
    FeatureReservesComponent,
    ScopedReserveComponent,
    ScopedTableClientsComponent,
    ScopedClientComponent,
    ScopedBackgroundMenuComponent,
    PageReservesClientsComponent,
    PageReservesReservesComponent,
    PageChaletDetailsComponent,
    PageHomeComponent,
    PageChaletPaymentComponent,
    PageHomeUserComponent,
    PageChaletMethodComponent,
    ProgressComponent,
    PagePlanDetailsComponent,
    PagePlanPaymentComponent,
    ScopedReservePlanComponent,
    ScopedClientPlanComponent,
    CommentFormComponent,
    CommentFormPlanComponent,
  ],
  imports: [
    CommonModule,
    FeatureReservesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FeatureProfileModule
  ],
  exports: [
    FeatureReservesComponent,
    ScopedReserveComponent,
    ScopedClientComponent,
    ScopedTableClientsComponent,
    ScopedBackgroundMenuComponent,
    PageReservesClientsComponent,
    PageReservesReservesComponent,
    PageChaletPaymentComponent,
    PageChaletDetailsComponent,
    PageChaletMethodComponent,
    ProgressComponent
  ]
})
export class FeatureReservesModule { }
