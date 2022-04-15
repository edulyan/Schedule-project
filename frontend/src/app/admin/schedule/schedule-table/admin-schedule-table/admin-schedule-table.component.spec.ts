import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScheduleTableComponent } from './admin-schedule-table.component';

describe('AdminScheduleTableComponent', () => {
  let component: AdminScheduleTableComponent;
  let fixture: ComponentFixture<AdminScheduleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminScheduleTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminScheduleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
