import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StudentCreateComponent } from '../../create/student-create/student-create.component';
import { StudentUpdateComponent } from '../../update/student-update/student-update.component';

export interface IStudent {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
}

const students: IStudent[] = [
  { id: 1, firstname: 'Hydrogen', lastname: '', password: '123' },
  { id: 2, firstname: 'Helium', lastname: '', password: '123' },
  { id: 3, firstname: 'Lithium', lastname: '', password: '123' },
  { id: 4, firstname: 'Beryllium', lastname: '', password: '123' },
  { id: 5, firstname: 'Boron', lastname: '', password: '123' },
  { id: 6, firstname: 'Carbon', lastname: '', password: '123' },
  { id: 7, firstname: 'Nitrogen', lastname: '', password: '123' },
  { id: 8, firstname: 'Oxygen', lastname: '', password: '123' },
  { id: 9, firstname: 'Fluorine', lastname: '', password: '123' },
  { id: 10, firstname: 'Neon', lastname: '', password: '123' },
];

@Component({
  selector: 'app-create-student',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  displayedColumns: string[] = [
    'ID',
    'firstname',
    'lastname',
    'password',
    'email',
    'phone',
    'group_title',
    'delete',
  ];
  dataSource = students;

  create() {
    this.matDialog.open(StudentCreateComponent, {
      width: '400px',
    });
  }

  update() {
    this.matDialog.open(StudentUpdateComponent, {
      width: '400px',
    });
  }
}
