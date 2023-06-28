import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BootcampService } from '../bootcamp.service';
import { UpdateStudent } from '../bootcapm.interfaces';
import {  MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-pop-up-edit-student',
  templateUrl: './pop-up-edit-student.component.html',
  styleUrls: ['./pop-up-edit-student.component.css'],
})
export class PopUpEditStudentComponent {
  form: FormGroup;

  constructor(private fb:FormBuilder, private service: BootcampService,
     private dialogRef: MatDialogRef<PopUpEditStudentComponent>,){
    this.form = this.fb.group({
      Firstname: ['', Validators.required],
      lastname:['', Validators.required],
      address: this.fb.group({
        area:['', Validators.required],
        road:['', Validators.required],
        postcode:['', Validators.required],
    }),
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
      const student = this.form.value as UpdateStudent;
      this.service.updateStudent(student.username, student).subscribe((response) => {
        console.log(response);
        alert('Student updated successfully')
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

