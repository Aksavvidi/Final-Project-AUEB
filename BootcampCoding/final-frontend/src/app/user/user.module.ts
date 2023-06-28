import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import{HttpClientModule} from '@angular/common/http';
import { StudentGradesComponent } from './student-grades/student-grades.component';
import { TeacherUpdateGradesComponent } from './teacher-update-grades/teacher-update-grades.component';
import { UserService } from './user.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentInsertComponent } from './student-insert/student-insert.component';


const routes: Routes = [
  {path: 'students-grades', component:StudentGradesComponent},
  {path:'update-grades', component:TeacherUpdateGradesComponent},
  {path:'insert-student', component: StudentInsertComponent}
]

@NgModule({
  declarations: [
    StudentGradesComponent,
    TeacherUpdateGradesComponent,
    StudentInsertComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[UserService]
})
export class UserModule { }
