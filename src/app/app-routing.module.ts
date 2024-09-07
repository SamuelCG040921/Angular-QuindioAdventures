import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureReservesComponent } from './features/feature-reserves/feature-reserves.component';
import { PageHomeComponent } from './features/feature-reserves/pages/page-home/page-home.component';
import { PageChaletComponent } from './features/feature-chalets/pages/page-chalet/page-chalet.component';
import { PagePlanComponent } from './features/feature-plans/pages/page-plan/page-plan.component';
import { FeatureLoginComponent } from './features/feature-login/feature-login.component';
import { FeatureRegisterComponent } from './features/feature-register/feature-register.component';
import { ChaletRegisterFormComponent } from './features/feature-profile/pages/chalet-register-form/chalet-register-form.component';
import { ChangePasswordComponent } from './features/feature-profile/pages/change-password/change-password.component';
import { PageHomeUserComponent } from './features/feature-reserves/pages/page-home-user/page-home-user.component';
import { LoginAdminComponent } from './features/feature-admin/pages/login-admin/login-admin.component';
import { UsersAdminComponent } from './features/feature-admin/pages/users-admin/users-admin.component';
import { FeatureAdminComponent } from './features/feature-admin/feature-admin.component';
import { AdminChaletsComponent } from './features/feature-admin/pages/admin-chalets/admin-chalets.component';
import { PageChaletDetailsComponent } from './features/feature-reserves/pages/page-chalet-details/page-chalet-details.component';
import { PageChaletPaymentComponent } from './features/feature-reserves/pages/page-chalet-payment/page-chalet-payment.component';
import { ChaletEditFormComponent } from './features/feature-profile/pages/chalet-edit-form/chalet-edit-form.component';
import { PlanEditFormComponent } from './features/feature-profile/pages/plan-edit-form/plan-edit-form.component';
import { PagePlanPaymentComponent } from './features/feature-reserves/pages/page-plan-payment/page-plan-payment.component';

const routes: Routes = [
  {path:'reservas', component: FeatureReservesComponent},
  {path:'', component: PageHomeComponent},
  {path:'chalets', component: PageChaletComponent},
  {path:'planes', component:PagePlanComponent},
  {path:'planes-vacacionales', component:PagePlanComponent},
  {path: 'adminHome', component: FeatureAdminComponent},
  {path:'login', component: FeatureLoginComponent},
  {path: 'register', component: FeatureRegisterComponent},
  {path: 'create-chalet', component: ChaletRegisterFormComponent},
  {path: 'cambiar-contraseña', component: ChangePasswordComponent},
  {path: 'home-user', component: PageHomeUserComponent},
  {path: 'chalet/:id', component: PageChaletDetailsComponent},
  {path: 'paymentform/:id', component: PageChaletPaymentComponent },
  {path: 'paymentformplan/:id', component: PagePlanPaymentComponent },
  {path: 'loginadminSamuelManuelaSantiagoJuanBalsero1234241316&_', component: LoginAdminComponent},
  {path: 'edit-chalet/:id', component: ChaletEditFormComponent},
  {path: 'edit-plan', component: PlanEditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}