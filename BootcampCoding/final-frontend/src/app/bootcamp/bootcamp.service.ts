import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Courses, CoursesAPIList, Student, StudentAPIList, Teacher, TeacherAPIList, UpdateStudent, UpdateStudentAPIList, UpdateTeacher, UpdateTeacherAPIList } from './bootcapm.interfaces';
import { delay } from 'rxjs';
import { Observable } from 'rxjs';

const BOOTCAMP_API = 'http://localhost:3000'; 

@Injectable()
export class BootcampService {

  constructor(private http: HttpClient) { }

  studentFindAll(){
    return this.http.get<StudentAPIList>(`${BOOTCAMP_API}/api/students/findAll`);
  }
  studentFindOne(lastname: string){
    return this.http.get<StudentAPIList>(`${BOOTCAMP_API}/api/students/findOne/${lastname}`);
  }
  studentCreate(student:Student){
    return this.http.post<StudentAPIList>(`${BOOTCAMP_API}/api/students/create`,student);
  }
  studentDelete(username:string){
    return this.http.delete<StudentAPIList>(`${BOOTCAMP_API}/api/students/delete/${username}`);
  }
  updateStudent(username: string, student:UpdateStudent){
    return this.http.patch<UpdateStudentAPIList>(`${BOOTCAMP_API}/api/students/update/${username}`, student)
  }

  coursesFindAll(){
    return this.http.get<CoursesAPIList>(`${BOOTCAMP_API}/api/courses/findAll`);
  }
  coursesFindOne(course:string){
    return this.http.get<CoursesAPIList>(`${BOOTCAMP_API}/api/courses/findOne/${course}`);
  }
  coursesCreate(course:Courses){
    return this.http.post<CoursesAPIList>(`${BOOTCAMP_API}/api/courses/create`,course);
  }
  coursesDelete(course:string){
    return this.http.delete<CoursesAPIList>(`${BOOTCAMP_API}/api/courses/delete/${course}`);
  }

  teachersFindAll(){
    return this.http.get<TeacherAPIList>(`${BOOTCAMP_API}/api/teachers/findAll`);
  }
  teachersFindOne(lastname:string){
    return this.http.get<TeacherAPIList>(`${BOOTCAMP_API}/api/teachers/findOne/${lastname}`);
  }
  teachersCreate(teacher:Teacher){
    return this.http.post<TeacherAPIList>(`${BOOTCAMP_API}/api/teachers/create`,teacher);
  }
  teachersDelete(username:string){
    return this.http.delete<TeacherAPIList>(`${BOOTCAMP_API}/api/teachers/delete/${username}`);
  }
  updateTeacher(username: string, teacher:UpdateTeacher){
    return this.http.patch<UpdateTeacherAPIList>(`${BOOTCAMP_API}/api/teachers/update/${username}`, teacher)
  }
}



