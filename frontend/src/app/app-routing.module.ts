import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CreateGroupComponent } from './admin/create/create-group/create-group.component';
import { CreateStudentComponent } from './admin/create/create-student/create-student.component';
import { CreateSubjectComponent } from './admin/create/create-subject/create-subject.component';
import { CreateTeacherComponent } from './admin/create/create-teacher/create-teacher.component';
import { AuthComponent } from './auth/auth.component';
import { ScheduleComponent } from './user/schedule/schedule.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'user/schedule', component: ScheduleComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/create/group', component: CreateGroupComponent },
  { path: 'admin/create/student', component: CreateStudentComponent },
  { path: 'admin/create/subject', component: CreateSubjectComponent },
  { path: 'admin/create/teacher', component: CreateTeacherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
