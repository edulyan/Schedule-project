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
import { SubjecTabletModule } from './admin/tables/subject-table/subject-table.module';
import { TeacherTableModule } from './admin/tables/teacher-table/teacher-table.module';
import { GroupCreateModule } from './admin/create/group-create/group-create.module';
import { StudentCreateModule } from './admin/create/student-create/student-create.module';
import { SubjectCreateModule } from './admin/create/subject-create/subject-create.module';
import { TeacherCreateModule } from './admin/create/teacher-create/teacher-create.module';
import { GroupUpdateModule } from './admin/update/group-update/group-update.module';
import { StudentUpdateModule } from './admin/update/student-update/student-update.module';
import { SubjectUpdateModule } from './admin/update/subject-update/subject-update.module';
import { TeacherUpdateModule } from './admin/update/teacher-update/teacher-update.module';
import { AdminScheduleTableModule } from './admin/schedule/schedule-table/admin-schedule-table/admin-schedule-table.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from './dialog/dialog.module';
import { UpdateStudentGroupModule } from './admin/tables/student-table/update-student-group/update-student-group.module';
import { LessonCreateModule } from './admin/schedule/schedule-create/lesson-create.module';
import { LessonUpdateModule } from './admin/schedule/schedule-update/lesson-update.module';

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
    SubjecTabletModule,
    TeacherTableModule,
    GroupCreateModule,
    StudentCreateModule,
    SubjectCreateModule,
    TeacherCreateModule,
    GroupUpdateModule,
    StudentUpdateModule,
    SubjectUpdateModule,
    TeacherUpdateModule,
    AdminScheduleTableModule,
    LessonCreateModule,
    LessonUpdateModule,
    DialogModule,
    UpdateStudentGroupModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
