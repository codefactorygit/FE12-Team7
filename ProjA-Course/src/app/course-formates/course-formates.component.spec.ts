import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormatesComponent } from './course-formates.component';

describe('CourseFormatesComponent', () => {
  let component: CourseFormatesComponent;
  let fixture: ComponentFixture<CourseFormatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseFormatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
