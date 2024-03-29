import { Component } from '@angular/core';
import { usersMenu, bootcampMenu } from 'shared';
import { AppService } from './app.service';
import { UiService } from 'ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coding Bootcamp';
  usersMenu = usersMenu;
  bootcampMenu = bootcampMenu;

  isLoggedIn$ = this.service.isLoggedIn$;
  loggedInUserFullname$ = this.service.loggedInUserFullname$;
  isLoading$ = this.service.isLoading$;

  alerts = this.uiService.alerts;

  constructor(private service: AppService, private uiService: UiService) {}

  logout() {
    this.service.logout();
  }

  onAlertDismiss(index: number) {
    this.uiService.alertDismiss(index);
  }
}
