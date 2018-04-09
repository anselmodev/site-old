import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LogoCipComponent } from './logo-cip/logo-cip.component';
import { BgPixelComponent } from './bg-pixel/bg-pixel.component';


@NgModule({
  declarations: [FooterComponent, LogoCipComponent, BgPixelComponent],
  imports: [CommonModule],
  exports: [FooterComponent, LogoCipComponent, BgPixelComponent],
  providers: [DatePipe]
})
export class SharedModule {}
