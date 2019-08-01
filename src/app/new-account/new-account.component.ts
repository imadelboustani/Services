import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../loging.service';
import {AccountService} from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {

 constructor(private loginService: LoggingService , private accountService: AccountService ) {}
    onCreateAccount(accountName: string, accountStatus: string) {
   this.accountService.saveAccount(accountName, accountStatus);
   // this.loginService.logStatusChange();
   }
}

