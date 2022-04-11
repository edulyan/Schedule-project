import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTableComponent } from './teacher-table.component';

describe('CreateTeacherComponent', () => {
  let component: TeacherTableComponent;
  let fixture: ComponentFixture<TeacherTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
