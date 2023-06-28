import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BootcampService } from '../bootcamp.service';
import { MatDialogRef } from '@angular/material/dialog';
import {  UpdateTeacher } from '../bootcapm.interfaces';

@Component({
  selector: 'app-pop-up-edit-teacher',
  templateUrl: './pop-up-edit-teacher.component.html',
  styleUrls: ['./pop-up-edit-teacher.component.css']
})
export class PopUpEditTeacherComponent {
  form: FormGroup;

  constructor(private fb:FormBuilder, private service: BootcampService,
     private dialogRef: MatDialogRef<PopUpEditTeacherComponent>,){
    this.form = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname:['', Validators.required],
      course:['',Validators.required],
      phone: this.fb.array([this.initPhone()]),
    });
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
      const username = this.form.value.username;
      const teacher = this.form.value as UpdateTeacher;
      this.service.updateTeacher(username, teacher).subscribe((response) => {
        console.log(response);
        alert('Teacher updated successfully')
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

