import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { Teacher } from './entity/teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../role/entity/role.entity';
import { Subject } from '../subject/entity/subject.entity';
import { Lesson } from '../lesson/entity/lesson.entity';

@Module({
  providers: [TeacherService],
  controllers: [TeacherController],
  imports: [TypeOrmModule.forFeature([Teacher, Role, Lesson, Subject])],
  exports: [TeacherService],
})
export class TeacherModule {}
