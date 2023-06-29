import {  Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BootcampService } from '../bootcamp.service';
import { Student, StudentAPIList } from '../bootcapm.interfaces';
import { Subscription } from 'rxjs';
import { PopUpEditStudentComponent } from '../pop-up-edit-student/pop-up-edit-student.component';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class StudentsComponent implements OnInit, OnDestroy{


  constructor(private studentService: BootcampService,private dialog: MatDialog){}
  
  loading = false;  
  studentList: Student[] = [];
  searchQuery: string = '';

  subscription: Subscription | undefined;

  openPopup(student:any): void {
    const dialogRef = this.dialog.open(PopUpEditStudentComponent, {
      width: '800px',height:'90vh',
      data: student // Pass the existing data here
    });
    dialogRef.afterClosed().subscribe() 
      // Handle any actions or data returned after the popup is closed
    ;
  }

  ngOnInit(): void {
    console.log('Starting studentFindAll API call');
    this.subscription = this.studentService.studentFindAll().subscribe({
      next: (apiData: StudentAPIList) => {
        const{status, students}= apiData;
        console.log( students);
        this.studentList = apiData.students;

      },
      error: (error) => {
        this.loading = false;
        console.log(error)
      },
      complete:() => {
        this.loading = false;
        console.log('API call completed');
      },
    
    });
  }

  onSearch(): void{
    if(this.searchQuery.trim() !== ''){
      this.loading = true;
      this.subscription = this.studentService.studentFindOne(this.searchQuery).subscribe({
        next:(response: any) => {
          const{status, data } = response;
          if(status){
            this.studentList = data ? [data] : [];
          }else {
            console.log('Student not found');
            this.studentList = [];
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

  OnstudentDelete(username:string){
    this.loading = true;
    this.studentService.studentDelete(username).subscribe({
      next:(response) => {
        alert('Student deleted');
        this.ngOnInit();
      },
      error:(error) => {
        this.loading = false;
        console.log(error)
      },
      complete:() => { 
        this.loading = false;
        console.log('API call delete completed');
        },
      
    })
  }


  ngOnDestroy(): void {   
      this.subscription?.unsubscribe();  
  }
}
