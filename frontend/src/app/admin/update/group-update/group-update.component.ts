import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IGroup } from 'src/app/models/group/group.interface';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-group-update',
  templateUrl: './group-update.component.html',
  styleUrls: ['./group-update.component.scss'],
})
export class GroupUpdateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<GroupUpdateComponent>,
    private groupService: GroupService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public updateGroupModel: IGroup = {} as IGroup;

  ngOnInit(): void {
    this.updateGroupModel = this.data.group as IGroup;
  }

  updateGroup(form: NgForm) {
    if (form.valid) {
      this.handleAfterCreate(this.groupService.update(this.updateGroupModel));
    }
  }

  private handleAfterCreate(observable: Observable<IGroup>) {
    return observable.subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
