import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubjectCreateComponent } from '../../create/subject-create/subject-create.component';
import { SubjectUpdateComponent } from '../../update/subject-update/subject-update.component';

export interface ISubjects {
  id: number;
  title: string;
  lessons: [];
  teachers: [];
}

const subjects: ISubjects[] = [
  { id: 1, title: 'Hydrogen', lessons: [], teachers: [] },
  { id: 2, title: 'Helium', lessons: [], teachers: [] },
  { id: 3, title: 'Lithium', lessons: [], teachers: [] },
  { id: 4, title: 'Beryllium', lessons: [], teachers: [] },
  { id: 5, title: 'Boron', lessons: [], teachers: [] },
  { id: 6, title: 'Carbon', lessons: [], teachers: [] },
  { id: 7, title: 'Nitrogen', lessons: [], teachers: [] },
  { id: 8, title: 'Oxygen', lessons: [], teachers: [] },
  { id: 9, title: 'Fluorine', lessons: [], teachers: [] },
  { id: 10, title: 'Neon', lessons: [], teachers: [] },
];

@Component({
  selector: 'app-create-subject',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.scss'],
})
export class SubjectTableComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['ID', 'title', 'lessons', 'teachers', 'delete'];
  dataSource = subjects;

  create() {
    this.matDialog.open(SubjectCreateComponent, {
      width: '400px',
    });
  }

  update() {
    this.matDialog.open(SubjectUpdateComponent, {
      width: '400px',
    });
  }
}
