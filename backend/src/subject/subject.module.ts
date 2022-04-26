import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { Subject } from './entity/subject.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from '../teacher/entity/teacher.entity';
import { Lesson } from '../lesson/entity/lesson.entity';

@Module({
  providers: [SubjectService],
  controllers: [SubjectController],
  imports: [TypeOrmModule.forFeature([Subject, Lesson])],
  exports: [SubjectService],
})
export class SubjectModule {}
