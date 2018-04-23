import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import localePt from '@angular/common/locales/pt';

import { PreloaderService } from './core/service/preloader.service';
import { CounterService } from './core/service/counter.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { ContactFormService } from './core/service/contact-form.service';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localePt);

import * as Hammer from 'hammerjs';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    HttpClientModule,
    PreloaderService,
    CounterService,
    ContactFormService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
