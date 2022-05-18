import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { IGroup } from 'src/app/models/group/group.interface';
import { GroupService } from 'src/app/service/group.service';
import { GroupCreateComponent } from '../../create/group-create/group-create.component';
import { GroupUpdateComponent } from '../../update/group-update/group-update.component';

@Component({
  selector: 'app-create-group',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.scss'],
})
export class GroupTableComponent implements OnInit {
  constructor(
    private groupService: GroupService,
    public matDialog: MatDialog
  ) {}

  private groupData = new BehaviorSubject<IGroup[]>([]);
  public groups: IGroup = {} as IGroup;

  ngOnInit() {
    this.groupService
      .getAll()
      .subscribe((groupListItem) => this.groupData.next(groupListItem));
  }

  displayedColumns: string[] = ['ID', 'title', 'students', 'lessons', 'delete'];

  getGroups(): Observable<IGroup[]> {
    return this.groupData.asObservable();
  }

  searchGroup(title: string) {
    if (!title) {
      this.groupService
        .getAll()
        .subscribe((groupListItem) => this.groupData.next(groupListItem));
    } else {
      this.groupService
        .search(title)
        .subscribe((groupListItem) => this.groupData.next(groupListItem));
    }
  }

  create() {
    const ref = this.matDialog.open(GroupCreateComponent, {
      width: '400px',
    });

    ref.afterClosed().subscribe((group: IGroup) => {
      if (group) {
        const list = this.groupData.getValue();
        list.push(group);
        this.groupData.next(_.cloneDeep(list));
      }
    });
  }

  update(groupUPD: IGroup) {
    const ref = this.matDialog.open(GroupUpdateComponent, {
      width: '400px',
      data: { group: groupUPD },
    });

    ref.afterClosed().subscribe((editedGroup: IGroup) => {
      if (editedGroup) {
        const list = this.groupData.getValue();
        const postIndex = _.findIndex(
          list,
          (post) => post.id === editedGroup.id
        );
        list[postIndex] = editedGroup;

        this.groupData.next(_.cloneDeep(list));
      }
    });
  }

  delete(group: IGroup) {
    const ref = this.matDialog.open(DialogComponent, {
      width: '360px',
      height: '190px',
    });

    ref.afterClosed().subscribe((canContinue) => {
      if (canContinue) {
        this.groupService.remove(group.id).subscribe(() => {
          const list = this.groupData.getValue();
          _.remove(list, (post) => post.id === group.id);
          this.groupData.next(_.cloneDeep(list));
        });
      }
    });
  }
}
