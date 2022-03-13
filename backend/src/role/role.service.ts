import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleDto } from './dto/role.dto';
import { Role } from './entity/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  async getById(id: number): Promise<Role> {
    return await this.roleRepository.findOne(id);
  }

  async getRoleByValue(value: string): Promise<Role> {
    const role = await this.roleRepository.findOne({ where: { value } });
    return role;
  }

  async create(roleDto: RoleDto): Promise<Role> {
    const role = this.roleRepository.create(roleDto);
    return await this.roleRepository.save(role);
  }

  async remove(id: number): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
