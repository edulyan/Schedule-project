import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { GroupModule } from './group/group.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigPG } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(ConfigPG),
    StudentModule,
    TeacherModule,
    GroupModule,
  ],
})
export class AppModule {}
