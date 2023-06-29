import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Student, StudentAPIList} from 'shared'
import { UserService } from '../user.service';
@Component({
  selector: 'app-student-insert',
  templateUrl: './student-insert.component.html',
  styleUrls: ['./student-insert.component.css']
})
export class StudentInsertComponent {

  form: FormGroup;

  constructor(private fb:FormBuilder, private service: UserService){
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      Firstname: ['', Validators.required],
      lastname:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      address: this.fb.group({
          area:['', Validators.required],
          road:['', Validators.required],
          postcode:['', Validators.required],
      }),
      phone: this.fb.array([this.initPhone()]),
      courses: this.fb.array([this.initCourse()])
    });


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

  initPhone(): FormGroup {
    return this.fb.group({
      type: ['', Validators.required],
      number:['', [Validators.required, Validators.minLength(10)]]
    });
   }

   get phoneControls() {
    return(this.form.get('phone') as FormArray).controls;
   }
   addPhone(): void {
    const phones = this.form.get('phone') as FormArray;
    phones.push(this.initPhone());
  }

  removePhone(index: number): void {
    const phones = this.form.get('phone') as FormArray;
    phones.removeAt(index);
  }
 
  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      const student = this.form.value as Student;
      this.service.studentCreate(student).subscribe((response) => {
        console.log(response);
        alert('Student inserted successfully')
        this.form.reset(); 
      });
    } else {
      console.log('Form is not valid');
    }
  }
}


