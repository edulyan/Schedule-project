import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateStudentDto } from '../student/dto/createStudent.dto';
import { Student } from '../student/entity/student.entity';
import { CreateTeacherDto } from '../teacher/dto/createTeacher.dto';
import { StudentService } from '../student/student.service';
import { TeacherService } from '../teacher/teacher.service';

@Injectable()
export class AuthService {
  constructor(
    private studentService: StudentService,
    private teacherService: TeacherService,
    private jwtService: JwtService,
  ) {}

  async loginStudent(studentDto: CreateStudentDto) {}

  async loginTeacher(teacherDto: CreateTeacherDto) {}

  async registrationStudent(studentDto: CreateStudentDto) {}

  async registrationTeacher(teacherDto: CreateTeacherDto) {}
}
