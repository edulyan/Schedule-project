import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateStudentDto } from '../student/dto/createStudent.dto';
import { CreateTeacherDto } from '../teacher/dto/createTeacher.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/student/login')
  async loginStudent(
    @Body() student: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const jwt = await this.authService.loginStudent(student);
    res.cookie('jwt', jwt, { httpOnly: true });

    return jwt;
  }

  @Post('/logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt');

    return {
      message: 'success',
    };
  }

  @Post('/student/registration')
  async registrationStudent(@Body() student: CreateStudentDto) {
    return await this.authService.registrationStudent(student);
  }

  @Post('/teacher/login')
  async loginTeacher(@Body() teacher: LoginDto) {
    return await this.authService.loginTeacher(teacher);
  }

  @Post('/teacher/registration')
  async registrationTeacher(@Body() teacher: CreateTeacherDto) {
    return await this.authService.registrationTeacher(teacher);
  }
}
