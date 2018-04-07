import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LogoCipComponent } from './logo-cip/logo-cip.component';
import { BgPixelComponent } from './bg-pixel/bg-pixel.component';


@NgModule({
  declarations: [FooterComponent, LogoCipComponent, BgPixelComponent],
  imports: [CommonModule],
  exports: [FooterComponent, LogoCipComponent, BgPixelComponent],
  providers: []
})
export class SharedModule {}
