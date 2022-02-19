import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entity/lesson.entity';
import { Group } from '../group/entity/group.entity';

@Module({
  providers: [LessonService],
  controllers: [LessonController],
  imports: [TypeOrmModule.forFeature([Lesson, Group])],
})
export class LessonModule {}
