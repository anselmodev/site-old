import { BrowserModule } from '@angular/platform-browser';
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
import { ModalComponent } from './shared/modal/modal.component';
import { SharedModule } from './shared/shared.module';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreloaderComponent,
    ModalComponent,
    ServicesComponent,
    WorksComponent,
    ContactComponent
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
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
