import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
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
    private matDialog: MatDialog
  ) {}

  private groupData = new BehaviorSubject<IGroup[]>([]);

  ngOnInit(): void {
    this.groupService
      .getAll()
      .subscribe((groupListItem) => this.groupData.next(groupListItem));
  }

  displayedColumns: string[] = ['ID', 'title', 'students', 'lessons', 'delete'];

  getGroups(): Observable<IGroup[]> {
    return this.groupData.asObservable();
  }

  create() {
    this.matDialog.open(GroupCreateComponent, {
      width: '400px',
    });
  }

  update() {
    this.matDialog.open(GroupUpdateComponent, {
      width: '400px',
    });
  }
}
