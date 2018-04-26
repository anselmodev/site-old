import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { WorksComponent } from './works.component';

// Routes Home Component
const workRoutes: Routes = [
  { path: '', component: WorksComponent }
  ];

@NgModule({
  declarations: [WorksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(workRoutes),
    SharedModule
  ],
  exports: [],
  providers: []
})
export class WorksModule {}
