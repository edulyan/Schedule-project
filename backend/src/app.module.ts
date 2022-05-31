import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { GroupModule } from './group/group.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigPG } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ConfigPG),
    StudentModule,
    TeacherModule,
    GroupModule,
    AuthModule,
    RoleModule,
    LessonModule,
  ],
})
export class AppModule {}
