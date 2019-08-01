 export class LoggingService {
  logStatusChange(AccountStatus: string) {
    console.log('A server status changed, new status: ' + AccountStatus);
  }
}
