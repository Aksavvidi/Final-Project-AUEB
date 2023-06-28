import { ComponentFixture, TestBed } from '@angular/core/testing';

import * as teacherUpdateGradesComponent from './teacher-update-grades.component';

describe('TeacherUpdateGradesComponent', () => {
  let component: teacherUpdateGradesComponent.TeacherUpdateGradesComponent;
  let fixture: ComponentFixture<teacherUpdateGradesComponent.TeacherUpdateGradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [teacherUpdateGradesComponent.TeacherUpdateGradesComponent]
    });
    fixture = TestBed.createComponent(teacherUpdateGradesComponent.TeacherUpdateGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
