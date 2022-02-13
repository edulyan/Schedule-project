import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTeacherDto } from './dto/createTeacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  async getAll() {
    return await this.teacherService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.teacherService.getById(id);
  }

  @Post()
  async create(@Body() teacherDto: CreateTeacherDto) {
    return await this.teacherService.create(teacherDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.teacherService.remove(id);
  }
}
