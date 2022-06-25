import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentService } from '../student/student.service';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/createGroup.dto';
import { Group } from './entity/group.entity';
import { UpdateGroupDto } from './dto/updateGroup.dto';
const dottie = require('dottie');

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private groupRepository: Repository<Group>,
    @Inject(forwardRef(() => StudentService))
    private readonly studentService: StudentService,
  ) {}

  async getAll(): Promise<Group[]> {
    return await this.groupRepository.find({
      relations: ['students', 'lessons'],
    });
  }

  async getById(id: number): Promise<Group> {
    return await this.groupRepository.findOne(id, {
      relations: ['students', 'lessons'],
    });
  }

  async getGroupByValue(title: string): Promise<Group> {
    return await this.groupRepository.findOne({ where: { title } });
  }

  async search(query: string): Promise<Group[]> {
    return await this.groupRepository.find({
      where: { title: query },
      relations: ['students', 'lessons'],
    });
  }

  async create(groupDto: CreateGroupDto): Promise<Group> {
    if (!groupDto) {
      throw new BadRequestException('Title is required.');
    }

    const group = this.groupRepository.create(groupDto);
    return await this.groupRepository.save(group);
  }

  async removeGroupAtStudent(
    groupId: number,
    studentId: number,
  ): Promise<boolean> {
    const group = await this.getById(groupId);
    const student = await this.studentService.getById(studentId);

    const found = group.students.findIndex((x: any) => x.id == student.id);

    group.students.splice(found, 1);

    await this.groupRepository.save(group);

    return true;
  }

  async update(group: UpdateGroupDto): Promise<Group> {
    return await this.groupRepository.save(group);
  }

  async remove(id: number): Promise<boolean> {
    await this.groupRepository.delete(id);

    return true;
  }
}
