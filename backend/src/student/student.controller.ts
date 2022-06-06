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
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // @Roles('ADMIN')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  async getAll() {
    return this.studentService.getAll();
  }

  // @UseGuards(JwtAuthGuard)
  @Get('email/:email')
  async getByEmail(@Param('email') email: string) {
    return await this.studentService.getByEmail(email);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('search')
  @UsePipes(ValidationPipe)
  async search(@Query('query') query: string) {
    return this.studentService.search(query);
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.studentService.getById(id);
  }

  // @Roles('ADMIN')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() studentDto: CreateStudentDto) {
    return this.studentService.create(studentDto);
  }

  // @Roles('ADMIN')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/addRoleToStudent/:studentId/:roleId')
  async addRole(
    @Param('studentId') studentId: number,
    @Param('roleId') roleId: number,
  ) {
    return await this.studentService.addRole(studentId, roleId);
  }

  // @Roles('ADMIN')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/addGroupToStudent/:studentId/:groupId')
  async addGroup(
    @Param('studentId') studentId: number,
    @Param('groupId') groupId: number,
  ) {
    return await this.studentService.addGroup(studentId, groupId);
  }

  // @Roles('ADMIN')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/removeGroupAtStudent/:id')
  async removeGroupAtStudent(@Param('id') id: number) {
    return await this.studentService.removeGroupAtStudent(id);
  }

  // @Roles('ADMIN')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Put()
  async update(@Body() studentDto: UpdateStudentDto) {
    return await this.studentService.update(studentDto);
  }

  // @Roles('ADMIN')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.studentService.remove(id);
  }
}
