import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTeacherComponent } from './auth-teacher.component';

describe('AuthTeacherComponent', () => {
  let component: AuthTeacherComponent;
  let fixture: ComponentFixture<AuthTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
