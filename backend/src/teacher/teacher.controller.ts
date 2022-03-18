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

  @Post('/addRoleToTeacher/:teacherId/:roleId')
  async addRole(
    @Param('teacherId') teacherId: number,
    @Param('roleId') roleId: number,
  ) {
    return await this.teacherService.addRole(teacherId, roleId);
  }

  @Post('/addSubjectToTeacher/:teacherId/:subjectId')
  async addSubject(
    @Param('teacherId') teacherId: number,
    @Param('subjectId') subjectId: number,
  ) {
    return await this.teacherService.addSubject(teacherId, subjectId);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.teacherService.remove(id);
  }
}
