import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import localePt from '@angular/common/locales/pt';

import { PreloaderService } from './core/service/preloader.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { ModalComponent } from './shared/modal/modal.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PreloaderComponent,
    ModalComponent
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
    PreloaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
