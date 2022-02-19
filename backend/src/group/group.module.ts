import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from '../lesson/entity/lesson.entity';
import { Teacher } from '../teacher/entity/teacher.entity';
import { Student } from '../student/entity/student.entity';
import { Group } from './entity/group.entity';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { Subject } from '../subject/entity/subject.entity';

@Module({
  controllers: [GroupController],
  providers: [GroupService],
  imports: [
    TypeOrmModule.forFeature([Group, Student, Teacher, Lesson, Subject]),
  ],
})
export class GroupModule {}
