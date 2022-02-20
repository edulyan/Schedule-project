import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.lessonService.remove(id);
  }
}
