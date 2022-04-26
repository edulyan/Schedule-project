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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/createStudent.dto';
import { Student } from './entity/student.entity';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

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
  search(@Query('query') query: string) {
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

  @Put(':id')
  async update(@Param('id') id: number, @Body() studentDto: CreateStudentDto) {
    return await this.studentService.update(id, studentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.studentService.remove(id);
  }
}
