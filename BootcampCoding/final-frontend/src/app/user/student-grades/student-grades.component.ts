import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { StudentGrades, StudentGradesAPIList } from 'shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.css']
})
export class StudentGradesComponent implements OnInit {
  constructor(private service: UserService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loading = false;
  studentGradesList : StudentGrades[] = [];
  searchQuery: string = '';

  subscription: Subscription | undefined;

  onSearch(): void{
    if(this.searchQuery.trim() !== ''){
      this.loading = true;
      this.subscription = this.service.findOneGrades(this.searchQuery).subscribe({
        next:(response: any) => {
          const{status, data } = response;
          if(status){
            this.studentGradesList = data ? [data] : [];
          }else {
            console.log("Student's grade not found");
            this.studentGradesList = [];
          }},
          complete:() => { this.loading = false;
          console.log('API call findOne completed');
          },
        error:(error) => {
          this.loading = false;
          console.log(error);
        }
      });
    }
  }

}
