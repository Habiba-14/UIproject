import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IassignmentComponent } from './iassignment.component';

describe('IassignmentComponent', () => {
  let component: IassignmentComponent;
  let fixture: ComponentFixture<IassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IassignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
