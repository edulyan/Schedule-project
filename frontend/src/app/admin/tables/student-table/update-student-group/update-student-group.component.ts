import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { IGroup } from 'src/app/models/group/group.interface';
import { IStudent } from 'src/app/models/student/student.interface';
import { GroupService } from 'src/app/service/group.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-update-student-group',
  templateUrl: './update-student-group.component.html',
  styleUrls: ['./update-student-group.component.scss'],
})
export class UpdateStudentGroupComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<UpdateStudentGroupComponent>,
    private studentService: StudentService,
    private groupService: GroupService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public updateGroupOfStudent: IStudent = {} as IStudent;
  private groupData = new BehaviorSubject<IGroup[]>([]);

  ngOnInit(): void {
    this.groupService
      .getAll()
      .subscribe((groupListItem) => this.groupData.next(groupListItem));

    if (!this.data.student.group) {
      this.updateGroupOfStudent = this.data.student.group;
    } else {
      this.updateGroupOfStudent = this.data.student as IStudent;
    }
  }

  getGroups(): Observable<IGroup[]> {
    return this.groupData.asObservable();
  }

  updateStudentGroup(form: NgForm) {
    if (form.valid) {
      this.handleAfterCreate(
        this.studentService.addGroup(
          this.updateGroupOfStudent.id,
          this.updateGroupOfStudent.group.id
        )
      );
    }
  }

  private handleAfterCreate(observable: Observable<IStudent>) {
    return observable.subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
