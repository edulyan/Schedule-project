import { Component, OnInit } from '@angular/core';

export interface ITeacher {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
}

const teachers: ITeacher[] = [
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
  selector: 'app-create-teacher',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.scss'],
})
export class TeacherTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = [
    'ID',
    'firstname',
    'lastname',
    'password',
    'department',
    'email',
    'phone',
    'delete',
  ];
  dataSource = teachers;
}
