import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/createGroup.dto';
import { Group } from './entity/group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private groupRepository: Repository<Group>,
  ) {}

  async getAll(): Promise<Group[]> {
    return await this.groupRepository.find();
  }

  async getById(id: number): Promise<Group> {
    return await this.groupRepository.findOne(id);
  }

  async create(groupDto: CreateGroupDto): Promise<Group> {
    const group = this.groupRepository.create(groupDto);
    return await this.groupRepository.save(group);
  }

  async remove(id: number): Promise<void> {
    await this.groupRepository.delete(id);
  }
}
