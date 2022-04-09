import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { ScheduleModule } from './user/schedule/schedule.module';
import { AdminHomeModule } from './admin/admin-home/admin-home.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CreateGroupModule } from './admin/create/create-group/create-group.module';
import { CreateStudentModule } from './admin/create/create-student/create-student.module';
import { CreateSubjectModule } from './admin/create/create-subject/create-subject.module';
import { CreateTeacherModule } from './admin/create/create-teacher/create-teacher.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AuthModule,
    ScheduleModule,
    AdminHomeModule,
    CreateGroupModule,
    CreateStudentModule,
    CreateSubjectModule,
    CreateTeacherModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
