import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISubject } from 'src/app/models/subject/subject.interface';
import { SubjectService } from 'src/app/service/subject.service';
import { SubjectCreateComponent } from '../../create/subject-create/subject-create.component';
import { SubjectUpdateComponent } from '../../update/subject-update/subject-update.component';

@Component({
  selector: 'app-create-subject',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.scss'],
})
export class SubjectTableComponent implements OnInit {
  constructor(
    private subjectService: SubjectService,
    private matDialog: MatDialog
  ) {}

  private subjectData = new BehaviorSubject<ISubject[]>([]);

  ngOnInit(): void {
    this.subjectService
      .getAll()
      .subscribe((subjectListItem) => this.subjectData.next(subjectListItem));
  }

  displayedColumns: string[] = ['ID', 'title', 'lessons', 'teachers', 'delete'];

  getSubjects(): Observable<ISubject[]> {
    return this.subjectData.asObservable();
  }

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
