import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupCreateComponent } from '../../create/group-create/group-create.component';

export interface IGroup {
  id: number;
  title: string;
  students: [];
  lessons: [];
}

const groups: IGroup[] = [
  { id: 1, title: 'Hydrogen', students: [], lessons: [] },
  { id: 2, title: 'Helium', students: [], lessons: [] },
  { id: 3, title: 'Lithium', students: [], lessons: [] },
  { id: 4, title: 'Beryllium', students: [], lessons: [] },
  { id: 5, title: 'Boron', students: [], lessons: [] },
  { id: 6, title: 'Carbon', students: [], lessons: [] },
  { id: 7, title: 'Nitrogen', students: [], lessons: [] },
  { id: 8, title: 'Oxygen', students: [], lessons: [] },
  { id: 9, title: 'Fluorine', students: [], lessons: [] },
  { id: 10, title: 'Neon', students: [], lessons: [] },
];

@Component({
  selector: 'app-create-group',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.scss'],
})
export class GroupTableComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['ID', 'title', 'students', 'lessons', 'delete'];
  dataSource = groups;

  create() {
    this.matDialog.open(GroupCreateComponent, {
      width: '400px',
    });
  }
}
