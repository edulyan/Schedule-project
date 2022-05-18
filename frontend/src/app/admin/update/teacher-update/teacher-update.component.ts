import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ITeacher } from 'src/app/models/teacher/teacher.interface';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.scss'],
})
export class TeacherUpdateComponent implements OnInit {
  public updateTeacherModel: ITeacher = {} as ITeacher;

  constructor(
    private dialogRef: MatDialogRef<TeacherUpdateComponent>,
    private teacherService: TeacherService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.updateTeacherModel = this.data.teacher as ITeacher;
  }

  updateTeacher(form: NgForm) {
    if (form.valid) {
      this.handleAfterCreate(
        this.teacherService.update(this.updateTeacherModel)
      );
    }
  }

  private handleAfterCreate(observable: Observable<ITeacher>) {
    return observable.subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
