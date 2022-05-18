import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ISubject } from 'src/app/models/subject/subject.interface';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-subject-update',
  templateUrl: './subject-update.component.html',
  styleUrls: ['./subject-update.component.scss'],
})
export class SubjectUpdateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<SubjectUpdateComponent>,
    private subjectService: SubjectService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public updateSubjectModel: ISubject = {} as ISubject;

  ngOnInit(): void {
    this.updateSubjectModel = this.data.subject as ISubject;
  }

  updateGroup(form: NgForm) {
    if (form.valid) {
      this.handleAfterCreate(
        this.subjectService.update(this.updateSubjectModel)
      );
    }
  }

  private handleAfterCreate(observable: Observable<ISubject>) {
    return observable.subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
