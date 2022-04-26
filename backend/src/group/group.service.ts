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

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private groupRepository: Repository<Group>,
    @Inject(forwardRef(() => StudentService))
    private readonly studentService: StudentService,
  ) {}

  async getAll(): Promise<Group[]> {
    return await this.groupRepository.find();
  }

  async getById(id: number): Promise<Group> {
    return await this.groupRepository.findOne(id);
  }

  async create(groupDto: CreateGroupDto): Promise<Group> {
    if (!groupDto) {
      throw new BadRequestException('Title is required.');
    }

    const group = this.groupRepository.create(groupDto);
    return await this.groupRepository.save(group);
  }

  // async removeGroupAtStudent(
  //   groupId: number,
  //   studentId: number,
  // ): Promise<boolean> {
  //   const group = await this.getById(groupId);
  //   const student = await this.studentService.getById(studentId);

  //   // let found = await group.students.find((x: any) => x.id == student.id);

  //   // console.log(found);

  //   await group.students.splice(groupId, 1);

  //   return true;
  // }

  async removeGroupAtStudent(
    groupId: number,
    studentId: number,
  ): Promise<boolean> {
    const group = await this.getById(groupId);
    const student = await this.studentService.getById(studentId);

    const found = await group.students.splice(student.id, 1);

    return true;
  }

  async remove(id: number): Promise<boolean> {
    await this.groupRepository.delete(id);

    return true;
  }
}
