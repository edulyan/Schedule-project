import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entity/lesson.entity';
import { Group } from '../group/entity/group.entity';
import { Teacher } from '../teacher/entity/teacher.entity';
import { GroupModule } from '../group/group.module';
import { TeacherModule } from '../teacher/teacher.module';

@Module({
  providers: [LessonService],
  controllers: [LessonController],
  imports: [
    TypeOrmModule.forFeature([Lesson, Group, Teacher]),
    GroupModule,
    TeacherModule,
  ],
})
export class LessonModule {}
