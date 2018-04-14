import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LogoCipComponent } from './logo-cip/logo-cip.component';
import { BgPixelComponent } from './bg-pixel/bg-pixel.component';
import { ResponsiveMenuComponent } from './responsive-menu/responsive-menu.component';


@NgModule({
  declarations: [FooterComponent, LogoCipComponent, BgPixelComponent, ResponsiveMenuComponent],
  imports: [CommonModule],
  exports: [FooterComponent, LogoCipComponent, BgPixelComponent, ResponsiveMenuComponent],
  providers: [DatePipe]
})
export class SharedModule {}
