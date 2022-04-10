import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface PeriodicElement {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
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
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = [
    'ID',
    'firstname',
    'lastname',
    'password',
    'email',
    'phone',
    'group_title',
  ];
  dataSource = ELEMENT_DATA;
}
