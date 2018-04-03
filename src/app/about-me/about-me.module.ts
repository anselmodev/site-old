import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './about-me.component';

// Routes Home Component
const aboutRoutes: Routes = [{ path: '', component: AboutMeComponent }];

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes),
    SharedModule
  ],
  exports: [],
  providers: []
})
export class AboutMeModule {}
