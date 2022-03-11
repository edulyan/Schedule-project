import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '../role/entity/role.entity';
import { RoleService } from '../role/role.service';
import { getConnection, Repository } from 'typeorm';
import { CreateStudentDto } from './dto/createStudent.dto';
import { Student } from './entity/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    private readonly roleService: RoleService,
  ) {}

  async getAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async getById(id: number): Promise<Student> {
    return await this.studentRepository.findOne(id);
  }

  async getByEmail(email: string): Promise<Student> {
    const findEmail = await this.studentRepository.findOne({
      where: { email },
    });
    return findEmail;
  }

  async create(studentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(studentDto);

    const role = getConnection().getRepository(Role);
    return await this.studentRepository.save(student);
  }

  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
