import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateStudentDto } from '../student/dto/createStudent.dto';
import { CreateTeacherDto } from '../teacher/dto/createTeacher.dto';
import { StudentService } from '../student/student.service';
import { TeacherService } from '../teacher/teacher.service';
import { Student } from '../student/entity/student.entity';
import { Teacher } from '../teacher/entity/teacher.entity';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private studentService: StudentService,
    private teacherService: TeacherService,
    private jwtService: JwtService,
  ) {}

  generateTokenStudent(student: Student) {
    const payload = {
      id: student.id,
      email: student.email,
      group: student.group,
      role: student.role,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  generateTokenTeacher(teacher: Teacher) {
    const payload = {
      id: teacher.id,
      email: teacher.email,
      role: teacher.role,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateStudent(loginDto: LoginDto) {
    const student = await this.studentService.getByEmail(loginDto.email);
    const passCheck = await bcrypt.compare(loginDto.password, student.password);

    if (student && passCheck) {
      return student;
    }
    throw new UnauthorizedException({
      message: 'Некорректный email или пароль',
    });
  }

  async validateTeacher(loginDto: LoginDto) {
    const teacher = await this.teacherService.getByEmail(loginDto.email);
    const passCheck = await bcrypt.compare(loginDto.password, teacher.password);

    if (teacher && passCheck) {
      return teacher;
    }
    throw new UnauthorizedException({
      message: 'Некорректный email или пароль',
    });
  }

  async loginStudent(loginDto: LoginDto) {
    const student = await this.validateStudent(loginDto);
    return this.generateTokenStudent(student);
  }

  async loginTeacher(loginDto: LoginDto) {
    const teacher = await this.validateTeacher(loginDto);
    return this.generateTokenTeacher(teacher);
  }

  async registrationStudent(studentDto: CreateStudentDto) {
    const check = await this.studentService.getByEmail(studentDto.email);
    if (check) {
      throw new HttpException(
        'Пользователь с таким email уже существует',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(studentDto.password, 5);
    const student = await this.studentService.create({
      ...studentDto,
      password: hashPassword,
    });
    return this.generateTokenStudent(student);
  }

  async registrationTeacher(teacherDto: CreateTeacherDto) {
    const check = await this.teacherService.getByEmail(teacherDto.email);
    if (check) {
      throw new HttpException(
        'Пользователь с таким email уже существует',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(teacherDto.password, 5);
    const teacher = await this.teacherService.create({
      ...teacherDto,
      password: hashPassword,
    });
    return this.generateTokenTeacher(teacher);
  }
}
