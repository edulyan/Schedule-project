import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/createStudent.dto';
import { StudentService } from './student.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Response, Request } from 'express';
import { UpdateStudentDto } from './dto/updateStudent.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() {
    return this.studentService.getAll();
  }

  @Get('email/:email')
  async getByEmail(@Param('email') email: string) {
    return await this.studentService.getByEmail(email);
  }

  @Get('search')
  @UsePipes(ValidationPipe)
  async search(@Query('query') query: string) {
    return this.studentService.search(query);
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.studentService.getById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() studentDto: CreateStudentDto) {
    return this.studentService.create(studentDto);
  }

  @Post('/addRoleToStudent/:studentId/:roleId')
  async addRole(
    @Param('studentId') studentId: number,
    @Param('roleId') roleId: number,
  ) {
    return await this.studentService.addRole(studentId, roleId);
  }

  @Post('/addGroupToStudent/:studentId/:groupId')
  async addGroup(
    @Param('studentId') studentId: number,
    @Param('groupId') groupId: number,
  ) {
    return await this.studentService.addGroup(studentId, groupId);
  }

  @Put('/removeGroupAtStudent/:id')
  async removeGroupAtStudent(@Param('id') id: number) {
    return await this.studentService.removeGroupAtStudent(id);
  }

  @Put()
  async update(@Body() studentDto: UpdateStudentDto) {
    return await this.studentService.update(studentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.studentService.remove(id);
  }
}
