import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentGradesAPIList, Student, StudentAPIList, StudentGradesUpdateAPIList, StudentGradesUpdate } from 'shared';

const USER_API = 'http://localhost:3000/api/students';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  findOneGrades(username: string){
    return this.http.get<StudentGradesAPIList>(`${USER_API}/grades/${username}` )
  }

  studentCreate(student:Student){
    return this.http.post<StudentAPIList>(`${USER_API}/create`, student)}  

    updateGrades(username: string, student:StudentGradesUpdate){
      return this.http.patch<StudentGradesUpdateAPIList>(`${USER_API}/updateGrades/${username}`, student)
    }
}
