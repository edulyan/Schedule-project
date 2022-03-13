import { Body, Controller, Post } from '@nestjs/common';
import { LoginStudentDto } from '../student/dto/loginStudent.dto';
import { CreateStudentDto } from '../student/dto/createStudent.dto';
import { CreateTeacherDto } from '../teacher/dto/createTeacher.dto';
import { LoginTeacherDto } from 'src/teacher/dto/loginTeacher.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/student/login')
  async loginStudent(@Body() student: LoginStudentDto) {
    return await this.authService.loginStudent(student);
  }

  @Post('/student/registration')
  async registrationStudent(@Body() student: CreateStudentDto) {
    return await this.authService.registrationStudent(student);
  }

  @Post('/teacher/login')
  async loginTeacher(@Body() teacher: LoginTeacherDto) {
    return await this.authService.loginTeacher(teacher);
  }

  @Post('/teacher/registration')
  async registrationTeacher(@Body() teacher: CreateTeacherDto) {
    return await this.authService.registrationTeacher(teacher);
  }
}
