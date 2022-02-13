import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/createTeacher.dto';
import { Teacher } from './entity/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
  ) {}

  async getAll(): Promise<Teacher[]> {
    return await this.teacherRepository.find();
  }

  async getById(id: number): Promise<Teacher> {
    return await this.teacherRepository.findOne(id);
  }

  async create(teacherDto: CreateTeacherDto): Promise<Teacher> {
    const teacher = this.teacherRepository.create(teacherDto);
    return await this.teacherRepository.save(teacher);
  }

  async remove(id: number): Promise<void> {
    await this.teacherRepository.delete(id);
  }
}
