import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminScheduleTableComponent } from './admin/schedule/schedule-table/admin-schedule-table/admin-schedule-table.component';
import { GroupTableComponent } from './admin/tables/group-table/group-table.component';
import { LessonTableComponent } from './admin/tables/lesson-table/lesson-table.component';
import { StudentTableComponent } from './admin/tables/student-table/student-table.component';
import { TeacherTableComponent } from './admin/tables/teacher-table/teacher-table.component';
import { AuthStudentComponent } from './auth/auth-student/auth-student.component';
import { AuthTeacherComponent } from './auth/auth-teacher/auth-teacher.component';
import { ScheduleComponent } from './user/schedule/schedule.component';

const routes: Routes = [
  { path: 'auth/student', component: AuthStudentComponent },
  { path: 'auth/teacher', component: AuthTeacherComponent },
  { path: 'user/schedule/:id', component: ScheduleComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/table/group', component: GroupTableComponent },
  { path: 'admin/table/lesson', component: LessonTableComponent },
  { path: 'admin/table/student', component: StudentTableComponent },
  { path: 'admin/table/teacher', component: TeacherTableComponent },
  { path: 'admin/schedule/:id', component: AdminScheduleTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
