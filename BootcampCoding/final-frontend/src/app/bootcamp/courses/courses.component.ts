import { Component, OnDestroy, OnInit } from '@angular/core';
import { Courses, CoursesAPIList } from '../bootcapm.interfaces';
import { BootcampService } from '../bootcamp.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopUpEditCourseComponent } from '../pop-up-edit-course/pop-up-edit-course.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy{

  loading = false; 
  coursesList: Courses[] = [];
  searchQuery: string ='';

  subscription: Subscription | undefined;

  constructor(private courseService: BootcampService, private dialog: MatDialog) {}
 
  openPopup(course:any): void {
    const dialogRef = this.dialog.open(PopUpEditCourseComponent, {
      width: '800px',height:'80vh',
      data: course // Pass the existing data here
    });
    dialogRef.afterClosed().subscribe() 
      // Handle any actions or data returned after the popup is closed
    ;
  }

  ngOnInit(): void {
    console.log('Starting coursesFindAll API call');
    this.subscription = this.courseService.coursesFindAll().subscribe({
      next:(apiData: CoursesAPIList) => {
        const{status, courses } = apiData;
        this.coursesList = apiData.courses;
        console.log(status, courses);
      },
      error:(error) => {
        this.loading = false;
        console.log(error)
      },
      complete: () => {
        this.loading = false;
        console.log('API call completed')
      }
    });
  }

  onSearch(): void{
    if(this.searchQuery.trim() !== ''){
      this.loading = true;
      this.subscription = this.courseService.coursesFindOne(this.searchQuery).subscribe({
        next:(response: any) => {
          const{status, data } = response;
          if(status){
            this.coursesList = data ? [data] : [];
          }else {
            console.log('Course not found');
            this.coursesList = [];
          }},
          complete:() => { this.loading = false;
          console.log('API call findOne completed');
          },
        error:(error) => {
          this.loading = false;
          console.log(error);
        }
      }
        
        );
    }
  }

  OnCourseDelete(course:string){
    this.loading = true;
    this.courseService.coursesDelete(course).subscribe({
      next:(response) => {
        alert('Course deleted');
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
