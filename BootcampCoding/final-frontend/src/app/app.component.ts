import { Component } from '@angular/core';
import { usersMenu, bootcampMenu } from 'shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coding Bootcamp';
  usersMenu = usersMenu;
  bootcampMenu = bootcampMenu;


}
