import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import{HttpClientModule} from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { BootcampService } from './bootcamp.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import{MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PopUpEditStudentComponent } from './pop-up-edit-student/pop-up-edit-student.component';
import { PopUpEditCourseComponent } from './pop-up-edit-course/pop-up-edit-course.component';
import { PopUpEditTeacherComponent } from './pop-up-edit-teacher/pop-up-edit-teacher.component'




const routes : Routes = [
  {path: 'courses', component:CoursesComponent},
  {path: 'students', component:StudentsComponent},
  {path: 'teachers', component:TeachersComponent}
]

@NgModule({
  declarations: [
    CoursesComponent,
    StudentsComponent,
    TeachersComponent,
    PopUpEditStudentComponent,
    PopUpEditCourseComponent,
    PopUpEditTeacherComponent,
 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    
   ],
  providers:[
     BootcampService,
    ]
})
export class BootcampModule { }
