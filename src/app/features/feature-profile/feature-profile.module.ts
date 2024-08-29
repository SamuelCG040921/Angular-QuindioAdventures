import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeatureProfileRoutingModule } from './feature-profile-routing.module';
import { FeatureProfileComponent } from './feature-profile.component';
import { SharedModule } from '../../shared/shared.module';
import { ChaletRegisterFormComponent } from './pages/chalet-register-form/chalet-register-form.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { CardPlanComponent } from './components/card-plan/card-plan.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { ProfileWelcomeComponent } from './components/profile-welcome/profile-welcome.component';
import { ProfileDataComponent } from './pages/profile-data/profile-data.component';
import { ProfileWelcomeEditComponent } from './components/profile-welcome-edit/profile-welcome-edit.component';
import { PlansProfileComponent } from './pages/plans-profile/plans-profile.component';
import { ChaletsProfileComponent } from './pages/chalets-profile/chalets-profile.component';
import { MapComponent } from './components/map/map.component';
import { CardChaletComponent } from './components/card-chalet/card-chalet.component';
import { PlanRegisterFormComponent } from './pages/plan-register-form/plan-register-form.component';
import { ChaletEditFormComponent } from './pages/chalet-edit-form/chalet-edit-form.component';
import { PlanEditFormComponent } from './pages/plan-edit-form/plan-edit-form.component';

@NgModule({
  declarations: [
    FeatureProfileComponent,
    ChaletRegisterFormComponent,
    ChangePasswordComponent,
    CardPlanComponent,
    ChatsComponent,
    ProfileWelcomeComponent,
    ProfileDataComponent,
    ProfileWelcomeEditComponent,
    PlansProfileComponent,
    ChaletsProfileComponent,
    MapComponent,
    CardChaletComponent,
    PlanRegisterFormComponent,
    ChaletEditFormComponent,
    PlanEditFormComponent
  ],
  imports: [
    CommonModule,
    FeatureProfileRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    FeatureProfileComponent,
    MapComponent
  ]
})
export class FeatureProfileModule { }