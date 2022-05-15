import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleService } from '../role/role.service';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/createStudent.dto';
import { Student } from './entity/student.entity';
import { GroupService } from '../group/group.service';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    private readonly roleService: RoleService,
    private readonly groupService: GroupService,
  ) {}

  async getAll(): Promise<Student[]> {
    return await this.studentRepository.find({ relations: ['role', 'group'] });
  }

  async getById(id: number): Promise<Student> {
    return await this.studentRepository.findOne(id, {
      relations: ['role', 'group'],
    });
  }

  async getByEmail(email: string): Promise<Student> {
    const findEmail = await this.studentRepository.findOne({
      where: { email },
      relations: ['role'],
    });
    return findEmail;
  }

  async search(query: string): Promise<Student[]> {
    return await this.studentRepository.find({
      where: { firstname: query },
    });
  }

  async create(studentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(studentDto);
    const role = await this.roleService.getRoleByValue('USER');

    student.role = role;
    return await this.studentRepository.save(student);
  }

  async addRole(studentId: number, roleId: number): Promise<Student> {
    const studentTarget = await this.getById(studentId);
    const roleTarget = await this.roleService.getById(roleId);

    studentTarget.role = roleTarget;

    await this.studentRepository.save(studentTarget);

    return studentTarget;
  }

  async addGroup(studentId: number, groupId: number): Promise<Student> {
    const studentTarget = await this.getById(studentId);
    const groupTarget = await this.groupService.getById(groupId);

    studentTarget.group = groupTarget;

    await this.studentRepository.save(studentTarget);

    return studentTarget;
  }

  async update(id: number, studentDto: CreateStudentDto): Promise<void> {
    await this.studentRepository.update(id, studentDto);
  }

  async removeGroupAtStudent(studentId: number): Promise<void> {
    const student = await this.getById(studentId);

    student.group = null;

    await this.studentRepository.save(student);
  }

  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
