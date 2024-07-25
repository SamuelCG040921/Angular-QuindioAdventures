import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureProfileComponent } from './feature-profile.component';
import { ChatsComponent } from './pages/chats/chats.component';

  const routes: Routes = [
    {path:'micuenta', component:FeatureProfileComponent},
    {path:'mischats',component:ChatsComponent}
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureProfileRoutingModule { }
