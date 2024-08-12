import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureProfileComponent } from './feature-profile.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { PlansProfileComponent } from './pages/plans-profile/plans-profile.component';
import { ChaletsProfileComponent } from './pages/chalets-profile/chalets-profile.component';

  const routes: Routes = [
    {path:'micuenta', component:FeatureProfileComponent},
    {path:'mischats',component:ChatsComponent},
    {path:'misplanesvacacionales',component:PlansProfileComponent},
    {path:'mischalets',component:ChaletsProfileComponent}
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureProfileRoutingModule { }
