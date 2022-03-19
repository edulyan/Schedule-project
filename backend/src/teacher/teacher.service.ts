import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleService } from '../role/role.service';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/createTeacher.dto';
import { Teacher } from './entity/teacher.entity';
import { SubjectService } from '../subject/subject.service';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
    private readonly roleService: RoleService,
    private readonly subjectService: SubjectService,
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
    });
    return findEmail;
  }

  async create(teacherDto: CreateTeacherDto): Promise<Teacher> {
    const teacher = this.teacherRepository.create(teacherDto);
    return await this.teacherRepository.save(teacher);
  }

  async addRole(teacherId: number, roleId: number): Promise<Teacher> {
    const teacherTarget = await this.getById(teacherId);
    const roleTarget = await this.roleService.getById(roleId);

    teacherTarget.role = roleTarget;

    await this.teacherRepository.save(teacherTarget);

    return teacherTarget;
  }

  async addSubject(teacherId: number, subjectId: number): Promise<boolean> {
    const teacherTarget = await this.getById(teacherId);
    const subjectTarget = await this.subjectService.getById(subjectId);

    teacherTarget.subjects.push(subjectTarget);

    await this.teacherRepository.save(teacherTarget);

    return true;
  }

  async update(id: number, teacherDto: CreateTeacherDto): Promise<boolean> {
    await this.teacherRepository.update(id, teacherDto);

    return true;
  }

  async remove(id: number): Promise<void> {
    await this.teacherRepository.delete(id);
  }
}
