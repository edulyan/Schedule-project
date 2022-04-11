import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
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
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
