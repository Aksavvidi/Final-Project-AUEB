import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BootcampService } from '../bootcamp.service';
import { PopUpEditStudentComponent } from '../pop-up-edit-student/pop-up-edit-student.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Courses, UpdateCourses } from '../bootcapm.interfaces';

@Component({
  selector: 'app-pop-up-edit-course',
  templateUrl: './pop-up-edit-course.component.html',
  styleUrls: ['./pop-up-edit-course.component.css']
})
export class PopUpEditCourseComponent {

  form: FormGroup;

  constructor(private fb:FormBuilder, private service: BootcampService,
    private dialogRef: MatDialogRef<PopUpEditStudentComponent>,){
      this.form = this.fb.group({
        course: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate:['', Validators.required],
        teacher:['',Validators.required],});
    }

    onSubmit(): void {
      if (this.form.valid) {
        console.log(this.form.value);
        const UpCourse = this.form.value as UpdateCourses;
        this.service.updateCourse(UpCourse.course, UpCourse).subscribe((response) => {
          console.log(response);
          alert('Course updated successfully')
          this.form.reset(); 
        });
      } else {
        console.log('Form is not valid');
      }
    }

    onCancel(): void {
      // Close the dialog
      this.dialogRef.close();
    }
}
