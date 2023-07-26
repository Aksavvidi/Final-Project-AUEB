import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import{HttpClientModule} from '@angular/common/http';
import { StudentGradesComponent } from './student-grades/student-grades.component';
import { TeacherUpdateGradesComponent } from './teacher-update-grades/teacher-update-grades.component';

import { UserService } from './user.service';
import { AppService } from '../app.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentInsertComponent } from './student-insert/student-insert.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { tap } from 'rxjs';


// const userGuard = () => {
//   const router = inject(Router);
//   const service = inject(AppService)
//   return service.isLoading$.pipe(
//     tap(isLoggedIn => {
//      if(!isLoggedIn) router.navigate(['/login']);
//     })
//   );
// };

const routes: Routes = [
  {path: 'students-grades', component:StudentGradesComponent},
  {path:'update-grades', component:TeacherUpdateGradesComponent, },
  {path:'insert-student', component: StudentInsertComponent, },
  {path:'', component:WelcomeComponent}
]

@NgModule({
  declarations: [
    StudentGradesComponent,
    TeacherUpdateGradesComponent,
    StudentInsertComponent,
    WelcomeComponent
    
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
