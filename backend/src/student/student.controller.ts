import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/createStudent.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getAll() {
    return this.studentService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.studentService.getById(id);
  }

  @Get('email/:email')
  async getByEmail(@Param('email') email: string) {
    return await this.studentService.getByEmail(email);
  }

  @Post()
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

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.studentService.remove(id);
  }
}
