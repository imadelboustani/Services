import {LoggingService} from './loging.service';
import {Injectable} from '@angular/core';
@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  saveAccount(name: string, Statut: string) {
    this.accounts.push({ name: name, status: Statut});
    this.logingService.logStatusChange() ;
  }
  UpdateStatut(id: number, statut: string) {
    this.accounts[id].status = statut;
     this.logingService.logStatusChange();
  }
  constructor(private logingService: LoggingService) {}
}
