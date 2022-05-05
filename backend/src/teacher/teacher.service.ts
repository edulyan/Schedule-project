import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleService } from '../role/role.service';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/createTeacher.dto';
import { Teacher } from './entity/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
    private readonly roleService: RoleService,
  ) {}

  async getAll(): Promise<Teacher[]> {
    return await this.teacherRepository.find({
      relations: ['role'],
    });
  }

  async getById(id: number): Promise<Teacher> {
    return await this.teacherRepository.findOne(id, {
      relations: ['role'],
    });
  }

  async getByEmail(email: string): Promise<Teacher> {
    const findEmail = await this.teacherRepository.findOne({
      where: { email },
      relations: ['role'],
    });
    return findEmail;
  }

  async create(teacherDto: CreateTeacherDto): Promise<Teacher> {
    const teacher = this.teacherRepository.create(teacherDto);
    const role = await this.roleService.getRoleByValue('USER');

    teacher.role = role;
    return await this.teacherRepository.save(teacher);
  }

  async addRole(teacherId: number, roleId: number): Promise<Teacher> {
    const teacher = await this.getById(teacherId);
    const role = await this.roleService.getById(roleId);

    if (teacher && role) {
      teacher.role = role;

      await this.teacherRepository.save(teacher);

      return teacher;
    }
    throw new HttpException(
      'Пользователь или роль не найдены',
      HttpStatus.NOT_FOUND,
    );
  }

  async update(id: number, teacherDto: CreateTeacherDto): Promise<void> {
    await this.teacherRepository.update(id, teacherDto);
  }

  async remove(id: number): Promise<void> {
    await this.teacherRepository.delete(id);
  }
}
