import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEditTeacherComponent } from './pop-up-edit-teacher.component';

describe('PopUpEditTeacherComponent', () => {
  let component: PopUpEditTeacherComponent;
  let fixture: ComponentFixture<PopUpEditTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpEditTeacherComponent]
    });
    fixture = TestBed.createComponent(PopUpEditTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
