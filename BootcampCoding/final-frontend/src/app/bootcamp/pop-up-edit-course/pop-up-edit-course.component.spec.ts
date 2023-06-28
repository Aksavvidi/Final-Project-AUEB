import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEditCourseComponent } from './pop-up-edit-course.component';

describe('PopUpEditCourseComponent', () => {
  let component: PopUpEditCourseComponent;
  let fixture: ComponentFixture<PopUpEditCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpEditCourseComponent]
    });
    fixture = TestBed.createComponent(PopUpEditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
