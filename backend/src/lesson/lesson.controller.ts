import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateLessonDto } from './dto/createLesson.dto';
import { LessonService } from './lesson.service';

@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Get()
  async getAll() {
    return await this.lessonService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.lessonService.getById(id);
  }

  @Post()
  async create(@Body() lesson: CreateLessonDto) {
    return await this.lessonService.create(lesson);
  }

  @Post('/addGroupToLesson/:lessonId/:groupId')
  async addGroup(
    @Param('lessonId') teacherId: number,
    @Param('groupId') groupId: number,
  ) {
    return await this.lessonService.addGroup(teacherId, groupId);
  }

  @Post('/addSubjectToLesson/:lessonId/:subjectId')
  async addSubject(
    @Param('lessonId') lessonId: number,
    @Param('subjectId') subjectId: number,
  ) {
    return await this.lessonService.addSubject(lessonId, subjectId);
  }

  @Post('/addTeacherToLesson/:lessonId/:teacherId')
  async addTeacher(
    @Param('lessonId') lessonId: number,
    @Param('teacherId') teacherId: number,
  ) {
    return await this.lessonService.addTeacher(lessonId, teacherId);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() lessonDto: CreateLessonDto) {
    return await this.lessonService.update(id, lessonDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.lessonService.remove(id);
  }
}
