import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/createStudent.dto';
import { Student } from './entity/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async getAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async getById(id: number): Promise<Student> {
    return await this.studentRepository.findOne(id);
  }

  async create(studentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(studentDto);
    return await this.studentRepository.save(student);
  }

  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
