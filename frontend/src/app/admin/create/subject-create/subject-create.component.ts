import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ICreateSubject } from 'src/app/models/subject/createSubject.interface';
import { ISubject } from 'src/app/models/subject/subject.interface';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.scss'],
})
export class SubjectCreateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<SubjectCreateComponent>,
    private subjectService: SubjectService
  ) {}

  public newSubjectModel: ICreateSubject = {} as ICreateSubject;

  ngOnInit(): void {}

  public createSubject(form: NgForm) {
    if (form.valid) {
      this.handleAfterCreate(
        this.subjectService.createSubject(this.newSubjectModel)
      );
    }
  }

  private handleAfterCreate(observable: Observable<ISubject>) {
    return observable.subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
