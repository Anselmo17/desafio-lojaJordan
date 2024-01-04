import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
  },

  /* if you don't provide the currency symbol in the pipe, 
  this is going to be the default symbol (R$) ... */
  {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
