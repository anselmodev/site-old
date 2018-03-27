import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

// Routes Home Component
const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(homeRoutes), SharedModule],
  exports: [],
  providers: []
})
export class HomeModule {}
