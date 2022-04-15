import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminScheduleUpdateComponent } from '../../schedule-update/admin-schedule-update/admin-schedule-update.component';

export interface PeriodicElement {
  name: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { time: '8:15-9:45', name: 'Hydrogen' },
  { time: '2', name: 'Helium' },
  { time: '3', name: 'Lithium' },
  { time: '4', name: 'Beryllium' },
  { time: '5', name: 'Boron' },
  { time: '6', name: 'Carbon' },
  { time: '7', name: 'Nitrogen' },
  { time: '8', name: 'Oxygen' },
];

@Component({
  selector: 'app-admin-schedule-table',
  templateUrl: './admin-schedule-table.component.html',
  styleUrls: ['./admin-schedule-table.component.scss'],
})
export class AdminScheduleTableComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['time', 'day-name', 'create', 'delete'];
  dataSource = ELEMENT_DATA;

  update() {
    this.matDialog.open(AdminScheduleUpdateComponent, {
      width: '400px',
    });
  }
}
