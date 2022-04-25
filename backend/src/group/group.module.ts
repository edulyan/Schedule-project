import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from '../student/student.module';
import { Lesson } from '../lesson/entity/lesson.entity';
import { Student } from '../student/entity/student.entity';
import { Group } from './entity/group.entity';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';

@Module({
  controllers: [GroupController],
  providers: [GroupService],
  imports: [
    TypeOrmModule.forFeature([Group, Student, Lesson]),
    forwardRef(() => StudentModule),
  ],
  exports: [GroupService],
})
export class GroupModule {}
