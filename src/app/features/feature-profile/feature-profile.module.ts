import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureProfileRoutingModule } from './feature-profile-routing.module';
import { FeatureProfileComponent } from './feature-profile.component';
import { SharedModule } from '../../shared/shared.module';
import { ChaletRegisterFormComponent } from './pages/chalet-register-form/chalet-register-form.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { CardPlanComponent } from './components/card-plan/card-plan.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { ProfileWelcomeComponent } from './components/profile-welcome/profile-welcome.component';
import { ProfileDataComponent } from './pages/profile-data/profile-data.component';

@NgModule({
  declarations: [
    FeatureProfileComponent,
    ChaletRegisterFormComponent,
    ChangePasswordComponent,
    CardPlanComponent,
    ChatsComponent,
    ProfileWelcomeComponent,
    ProfileDataComponent,
  ],
  imports: [
    CommonModule,
    FeatureProfileRoutingModule,
    SharedModule
  ],
  exports: [
    FeatureProfileComponent
  ]
})
export class FeatureProfileModule { }