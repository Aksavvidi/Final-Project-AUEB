import { Component } from '@angular/core';
import { MenuItem } from './app.intefaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coding Bootcamp';

  bootcampMenu: MenuItem[] = [
    {text: 'Courses', link: 'bootcamp/courses'},
    {text: ' Students', link: 'bootcamp/students'},
    {text: 'Teachers', link: 'bootcamp/teachers'}
  ];
  usersMenu: MenuItem[] = [
    {text: "Student's Grades", link: 'user/students-grades'},
    {text: 'Teachers Update Grades', link: 'user/update-grades'},
    {text: 'Student insert', link: 'user/insert-student'},
  ];
}
