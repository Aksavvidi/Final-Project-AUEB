import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Teacher, TeacherAPIList } from '../bootcapm.interfaces';
import { BootcampService } from '../bootcamp.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopUpEditTeacherComponent } from '../pop-up-edit-teacher/pop-up-edit-teacher.component';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TeachersComponent implements OnInit, OnDestroy  {

  constructor(private teacherService: BootcampService, private dialog: MatDialog) {}

  loading = false;
  teacherList: Teacher[] = [];
  searchQuery: string = '';


  subscription: Subscription | undefined;

  openPopup(teacher:any): void {
    const dialogRef = this.dialog.open(PopUpEditTeacherComponent, {
      width: '800px',height:'80vh',
      data: teacher
    });
    dialogRef.afterClosed().subscribe() 
      // Handle any actions or data returned after the popup is closed
    ;
  }
  
  ngOnInit(): void {
    console.log("Starting find all teachers!")
    this.loading = true;
    this.subscription = this.teacherService.teachersFindAll().subscribe({
      next:(apiData: TeacherAPIList) => {
        const{status, teachers} = apiData;
        console.log( teachers);
        this.teacherList = apiData.teachers; // Assign the data to the teacherList property
        console.log(this.teacherList);
      },
      error:(error) => {
        console.log(error);
      },
      complete:() => {
        console.log("Api call completed")
      },
    });
  }
  onSearch(): void{
    if(this.searchQuery.trim() !== ''){
      this.loading = true;
      this.subscription = this.teacherService.teachersFindOne(this.searchQuery).subscribe({
        next:(response: any) => {
          const{status, data } = response;
          if(status){
            this.teacherList = data ? [data] : [];
          }else {
            console.log('Teacher not found');
            this.teacherList = [];
          }},
          error:(error) => {
            this.loading = false;
            console.log(error);
          },
          complete:() => {
          this.loading = false;
          console.log('API call findOne completed');
          }
      });
    }
  }

  OnTeacherDelete(username:string){
    this.loading = true;
    this.teacherService.teachersDelete(username).subscribe({
      next:(response) => {
        alert('Teacher deleted');
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