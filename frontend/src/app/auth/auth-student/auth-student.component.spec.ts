import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthStudentComponent } from './auth-student.component';

describe('AuthStudentComponent', () => {
  let component: AuthStudentComponent;
  let fixture: ComponentFixture<AuthStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthStudentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
