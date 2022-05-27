import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentGroupComponent } from './update-student-group.component';

describe('UpdateStudentGroupComponent', () => {
  let component: UpdateStudentGroupComponent;
  let fixture: ComponentFixture<UpdateStudentGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudentGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
