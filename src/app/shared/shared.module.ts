import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileButtonComponent } from './components/atoms/profile-button/profile-button.component';
import { SearchButtonComponent } from './components/atoms/search-button/search-button.component';
import { WhatInputComponent } from './components/atoms/what-input/what-input.component';
import { WhereInputComponent } from './components/atoms/where-input/where-input.component';

@NgModule({
  declarations: [
    ProfileButtonComponent,
    SearchButtonComponent,
    WhatInputComponent,
    WhereInputComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchButtonComponent,
    SearchButtonComponent,
    WhatInputComponent,
    WhereInputComponent
  ],
})
export class SharedModule { }
