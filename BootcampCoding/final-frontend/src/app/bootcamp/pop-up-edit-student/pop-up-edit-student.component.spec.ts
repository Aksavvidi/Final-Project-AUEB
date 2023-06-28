import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEditStudentComponent } from './pop-up-edit-student.component';

describe('PopUpEditStudentComponent', () => {
  let component: PopUpEditStudentComponent;
  let fixture: ComponentFixture<PopUpEditStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpEditStudentComponent]
    });
    fixture = TestBed.createComponent(PopUpEditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
