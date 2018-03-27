import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoCipComponent } from './logo-cip/logo-cip.component';


@NgModule({
  declarations: [LogoCipComponent],
  imports: [CommonModule],
  exports: [LogoCipComponent],
  providers: []
})
export class SharedModule {}
