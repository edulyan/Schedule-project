import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: '8:15-9:45', name: 'Hydrogen' },
  { position: '2', name: 'Helium' },
  { position: '3', name: 'Lithium' },
  { position: '4', name: 'Beryllium' },
  { position: '5', name: 'Boron' },
  { position: '6', name: 'Carbon' },
  { position: '7', name: 'Nitrogen' },
  { position: '8', name: 'Oxygen' },
];

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['demo-position', 'demo-name'];
  dataSource = ELEMENT_DATA;
}
