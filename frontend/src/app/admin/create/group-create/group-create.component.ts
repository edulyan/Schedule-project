import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ICreateGroup } from 'src/app/models/group/createGroup.interface';
import { IGroup } from 'src/app/models/group/group.interface';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.scss'],
})
export class GroupCreateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<GroupCreateComponent>,
    private groupService: GroupService
  ) {}

  public newGroupModel: ICreateGroup = {} as ICreateGroup;

  ngOnInit(): void {}

  public createGroup(form: NgForm) {
    if (form.valid) {
      this.handleAfterCreate(this.groupService.create(this.newGroupModel));
    }
  }

  private handleAfterCreate(observable: Observable<IGroup>) {
    return observable.subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
