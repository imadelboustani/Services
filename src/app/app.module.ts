import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import {LoggingService} from './loging.service';
import {AccountService} from './accounts.service';

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggingService,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
