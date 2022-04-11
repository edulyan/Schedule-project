import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { GroupTableComponent } from './admin/tables/group-table/group-table.component';
import { StudentTableComponent } from './admin/tables/student-table/student-table.component';
import { SubjectTableComponent } from './admin/tables/subject-table/subject-table.component';
import { TeacherTableComponent } from './admin/tables/teacher-table/teacher-table.component';
import { AuthComponent } from './auth/auth.component';
import { ScheduleComponent } from './user/schedule/schedule.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'user/schedule', component: ScheduleComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/create/group', component: GroupTableComponent },
  { path: 'admin/create/student', component: StudentTableComponent },
  { path: 'admin/create/subject', component: SubjectTableComponent },
  { path: 'admin/create/teacher', component: TeacherTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
