import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateLessonDto } from './dto/createLesson.dto';
import { UpdateLessonDto } from './dto/updateLesson.dto';
import { LessonService } from './lesson.service';

@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Get()
  async getAll() {
    return await this.lessonService.getAll();
  }

  @Get('/search')
  async search(@Query('query') query: string) {
    return this.lessonService.search(query);
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

  @Post('/addTeacherToLesson/:lessonId/:teacherId')
  async addTeacher(
    @Param('lessonId') lessonId: number,
    @Param('teacherId') teacherId: number,
  ) {
    return await this.lessonService.addTeacher(lessonId, teacherId);
  }

  @Put('/removeGroupAtLesson/:id')
  async removeGroupAtLesson(@Param('id') id: number) {
    return await this.lessonService.removeGroupAtLesson(id);
  }

  @Put('/removeTeacherAtLesson/:id')
  async removeTeacherAtLesson(@Param('id') id: number) {
    return await this.lessonService.removeTeacherAtLesson(id);
  }

  @Put()
  async update(@Body() lessonDto: UpdateLessonDto) {
    return await this.lessonService.update(lessonDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.lessonService.remove(id);
  }
}
