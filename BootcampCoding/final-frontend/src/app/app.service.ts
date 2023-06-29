import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import { TeacherAPIOneUser } from 'shared';
import { UiService } from 'ui';
import { Router } from '@angular/router';



const BOOTCAMP_API = 'http://localhost:3000'; 

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  private loggedInSubject = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this.loggedInSubject.asObservable();

  private loggedInUserFullnameSubject = new BehaviorSubject<string>('')
  loggedInUserFullname$ = this.loggedInUserFullnameSubject.asObservable();
  

  constructor(private http: HttpClient) { }

  login(username:string, password:string) {
    this.http.get<TeacherAPIOneUser>(`${BOOTCAMP_API}/api/teachers/findOne/${username}`)
    .subscribe((teacher) => {
      console.log(teacher);
      // if(teacher.teachers){
      //   this.loggedInSubject.next(teacher.teachers.password === password);
      //   this.loggedInUserFullnameSubject.next(`${teacher.teachers.firstname} ${teacher.teachers.lastname}`);
      //   console.log(teacher.teachers)
      // };
      if (teacher && teacher.status === true && teacher.teachers && teacher.teachers.password === password) {
        this.loggedInSubject.next(teacher.teachers.password === password);
        this.loggedInUserFullnameSubject.next(`${teacher.teachers.firstname} ${teacher.teachers.lastname}`);
        console.log(teacher.teachers);
       } 
      //else {
      //   this.loggedInSubject.next(false);
      //   this.loggedInUserFullnameSubject.next('');
      //   console.log('Invalid username or password');
      // }
      
   }); 
     this.setIsLoading(false);
      
  }


  logout() {
    this.loggedInSubject.next(false);
    this.loggedInUserFullnameSubject.next('');
  }

  setIsLoading(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }

}
