import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseManageComponent } from './admin-course-manage.component';

describe('AdminCourseManageComponent', () => {
  let component: AdminCourseManageComponent;
  let fixture: ComponentFixture<AdminCourseManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCourseManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCourseManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
