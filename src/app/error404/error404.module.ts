import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { Error404Component } from './error404.component';

// Routes Home Component
const error404Routes: Routes = [{ path: '', component: Error404Component }];

@NgModule({
  declarations: [Error404Component],
  imports: [
    CommonModule,
    RouterModule.forChild(error404Routes),
    SharedModule
  ],
  exports: [],
  providers: []
})
export class Error404Module {}
