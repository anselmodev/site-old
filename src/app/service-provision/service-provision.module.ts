import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ServiceProvisionComponent } from './service-provision.component';

// Routes Home Component
const serviceRoutes: Routes = [{ path: '', component: ServiceProvisionComponent }];

@NgModule({
  declarations: [ServiceProvisionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(serviceRoutes),
    SharedModule
  ],
  exports: [],
  providers: []
})
export class ServiceProvisionModule {}
