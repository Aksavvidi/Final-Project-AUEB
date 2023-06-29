import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Student, StudentGradesUpdate } from 'shared';

@Component({
  selector: 'app-teacher-update-grades',
  templateUrl: './teacher-update-grades.component.html',
  styleUrls: ['./teacher-update-grades.component.css']
})
export class TeacherUpdateGradesComponent {

  form: FormGroup;

  constructor(private fb:FormBuilder, private service: UserService){
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      Firstname: ['', Validators.required],
      lastname:['', Validators.required],
      courses: this.fb.array([this.initCourse()])
    })
  }

  initCourse(): FormGroup {
    return this.fb.group({
      course: ['', Validators.required],
      grade:['', Validators.required,]
    });
  }
  get courseControls(){
    return(this.form.get('courses') as FormArray).controls;
   }
   addCourses(): void {
    const courses = this.form.get('courses') as FormArray;
    courses.push(this.initCourse());
  }

  removeCourse(index: number): void {
    const courses = this.form.get('courses') as FormArray;
    courses.removeAt(index);
  }

  
  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      const username = this.form.value.username;
      const student = this.form.value as StudentGradesUpdate;
      this.service.updateGrades(username ,student).subscribe((response) => {
        console.log(response);
        this.form.reset(); 
      });
    } else {
      console.log('Form is not valid');
    }
  }

}
