import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BootcampService } from '../bootcamp.service';
import { MatDialogRef } from '@angular/material/dialog';
import {  UpdateTeacher } from '../bootcapm.interfaces';

@Component({
  selector: 'app-pop-up-edit-teacher',
  templateUrl: './pop-up-edit-teacher.component.html',
  styleUrls: ['./pop-up-edit-teacher.component.css']
})
export class PopUpEditTeacherComponent implements OnInit {
  public form: FormGroup;
  formData: any;

  constructor(public fb:FormBuilder, public service: BootcampService,
     private dialogRef: MatDialogRef<PopUpEditTeacherComponent>,){
    this.form = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname:['', Validators.required],
      course:['',Validators.required],
      email:['',Validators.required],
      phone: this.fb.array([this.initPhone()]),
    });
     }    
  ngOnInit(): void {
    this.showForm(this.formData);
  }
 
     //Show existing data on the form
     showForm(teachers: any){
      this.formData = teachers;
      this.form.patchValue({
        username:teachers.username,
        firstname:teachers.firstname,
        lastname:teachers.lastname,
        course:teachers.course,
        email: teachers.email,
      });
      // Clear existing phone controls
      const phones = this.form.get('phone') as FormArray;
      while (phones.length !== 0){
        phones.removeAt(0);
      }
       // Add phone controls from the existing data
      const phoneData = teachers.phone;
      if (phoneData && phoneData.length > 0) {
        for (const phone of phoneData) {
          phones.push(
            this.fb.group({
              type: [phone.type, Validators.required],
              number: [phone.number, [Validators.required, Validators.minLength(10)]],
            })
          );
        }
      }else {
        // If no phone data exists, add an initial phone control
        phones.push(this.initPhone());
        }
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
      const submittedData = this.form.value;
      console.log(submittedData);

      const username = submittedData.username;
      const teacher = submittedData as UpdateTeacher;

      this.service.updateTeacher(username, teacher).subscribe((response) => {
        console.log(response);
        alert('Teacher updated successfully')
        this.form.reset(); 

        // Update formData with the submitted data
      this.formData = submittedData;
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

