import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthStudentModule } from './auth/auth-student/auth-student.module';
import { AuthTeacherModule } from './auth/auth-teacher/auth-teacher.module';
import { ScheduleModule } from './user/schedule/schedule.module';
import { AdminHomeModule } from './admin/admin-home/admin-home.module';
import { GroupTableModule } from './admin/tables/group-table/group-table.module';
import { StudentTableModule } from './admin/tables/student-table/student-table.module';
import { TeacherTableModule } from './admin/tables/teacher-table/teacher-table.module';
import { GroupCreateModule } from './admin/create/group-create/group-create.module';
import { StudentCreateModule } from './admin/create/student-create/student-create.module';
import { TeacherCreateModule } from './admin/create/teacher-create/teacher-create.module';
import { GroupUpdateModule } from './admin/update/group-update/group-update.module';
import { StudentUpdateModule } from './admin/update/student-update/student-update.module';
import { TeacherUpdateModule } from './admin/update/teacher-update/teacher-update.module';
import { AdminScheduleTableModule } from './admin/schedule/schedule-table/admin-schedule-table/admin-schedule-table.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from './dialog/dialog.module';
import { UpdateStudentGroupModule } from './admin/tables/student-table/update-student-group/update-student-group.module';
import { LessonTableModule } from './admin/tables/lesson-table/lesson-table.module';
import { LessonCreateModule } from './admin/create/lesson-create/lesson-create.module';
import { LessonUpdateModule } from './admin/update/lesson-update/lesson-update.module';
import { AdminScheduleUpdateModule } from './admin/schedule/admin-schedule-update/admin-schedule-update.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthStudentModule,
    AuthTeacherModule,
    ScheduleModule,
    AdminHomeModule,
    GroupTableModule,
    StudentTableModule,
    TeacherTableModule,
    LessonTableModule,
    GroupCreateModule,
    StudentCreateModule,
    TeacherCreateModule,
    GroupUpdateModule,
    StudentUpdateModule,
    TeacherUpdateModule,
    AdminScheduleTableModule,
    LessonUpdateModule,
    LessonCreateModule,
    DialogModule,
    UpdateStudentGroupModule,
    AdminScheduleUpdateModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
