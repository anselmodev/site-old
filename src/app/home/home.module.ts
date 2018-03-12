import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { LogoCipComponent } from '../shared/logo-cip/logo-cip.component';

// Routes Home Component
const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, LogoCipComponent],
  imports: [CommonModule, RouterModule.forChild(homeRoutes)],
  exports: [],
  providers: []
})
export class HomeModule {}
