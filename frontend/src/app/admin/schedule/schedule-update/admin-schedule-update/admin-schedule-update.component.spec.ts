import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScheduleUpdateComponent } from './admin-schedule-update.component';

describe('AdminScheduleUpdateComponent', () => {
  let component: AdminScheduleUpdateComponent;
  let fixture: ComponentFixture<AdminScheduleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminScheduleUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminScheduleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
