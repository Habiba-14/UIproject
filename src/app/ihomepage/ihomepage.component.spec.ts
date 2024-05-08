import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhomepageComponent } from './ihomepage.component';

describe('IhomepageComponent', () => {
  let component: IhomepageComponent;
  let fixture: ComponentFixture<IhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IhomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
