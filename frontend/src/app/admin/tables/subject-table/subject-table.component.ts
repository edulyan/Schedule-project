import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import { DialogComponent } from 'src/app/dialog/dialog.component';
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
  public subjects: ISubject = {} as ISubject;

  ngOnInit(): void {
    this.subjectService
      .getAll()
      .subscribe((subjectListItem) => this.subjectData.next(subjectListItem));
  }

  displayedColumns: string[] = ['ID', 'title', 'lessons', 'delete'];

  getSubjects(): Observable<ISubject[]> {
    return this.subjectData.asObservable();
  }

  searchGroup(title: string) {
    if (!title) {
      this.subjectService
        .getAll()
        .subscribe((subjectListItem) => this.subjectData.next(subjectListItem));
    } else {
      this.subjectService
        .search(title)
        .subscribe((subjectListItem) => this.subjectData.next(subjectListItem));
    }
  }

  create() {
    const ref = this.matDialog.open(SubjectCreateComponent, {
      width: '400px',
    });

    ref.afterClosed().subscribe((subject: ISubject) => {
      if (subject) {
        const list = this.subjectData.getValue();
        list.push(subject);
        this.subjectData.next(_.cloneDeep(list));
      }
    });
  }

  update(subjectUPD: ISubject) {
    const ref = this.matDialog.open(SubjectUpdateComponent, {
      width: '400px',
      data: { subject: subjectUPD },
    });

    ref.afterClosed().subscribe((editedSubject: ISubject) => {
      if (editedSubject) {
        const list = this.subjectData.getValue();
        const postIndex = _.findIndex(
          list,
          (post) => post.id === editedSubject.id
        );
        list[postIndex] = editedSubject;

        this.subjectData.next(_.cloneDeep(list));
      }
    });
  }

  delete(subject: ISubject) {
    const ref = this.matDialog.open(DialogComponent, {
      width: '360px',
      height: '190px',
    });

    ref.afterClosed().subscribe((canContinue) => {
      if (canContinue) {
        this.subjectService.remove(subject.id).subscribe(() => {
          const list = this.subjectData.getValue();
          _.remove(list, (post) => post.id === subject.id);
          this.subjectData.next(_.cloneDeep(list));
        });
      }
    });
  }
}
