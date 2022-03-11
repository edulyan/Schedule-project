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

@Injectable()
export class AuthService {
  constructor(
    private studentService: StudentService,
    private teacherService: TeacherService,
    private jwtService: JwtService,
  ) {}

  async loginStudent(studentDto: CreateStudentDto) {
    const student = await this.validateStudent(studentDto);
    return this.generateTokenStudent(student);
  }

  async loginTeacher(teacherDto: CreateTeacherDto) {
    const teacher = await this.validateTeacher(teacherDto);
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

  async generateTokenStudent(student: Student) {
    const payload = await {
      email: student.email,
      id: student.id,
      group: student.group,
      role: student.role,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async generateTokenTeacher(teacher: Teacher) {
    const payload = await {
      email: teacher.email,
      id: teacher.id,
      subject: teacher.subjects,
      role: teacher.role,
      lesson: teacher.lessons,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateStudent(studentDto: CreateStudentDto) {
    const student = await this.studentService.getByEmail(studentDto.email);
    const passCheck = await bcrypt.compare(
      studentDto.password,
      student.password,
    );

    if (student && passCheck) {
      return student;
    } else {
      throw new UnauthorizedException({
        message: 'Некорректный email или пароль',
      });
    }
  }

  async validateTeacher(teacherDto: CreateTeacherDto) {
    const teacher = await this.teacherService.getByEmail(teacherDto.email);
    const passCheck = await bcrypt.compare(
      teacherDto.password,
      teacher.password,
    );

    if (teacher && passCheck) {
      return teacher;
    } else {
      throw new UnauthorizedException({
        message: 'Некорректный email или пароль',
      });
    }
  }
}
