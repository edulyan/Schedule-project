import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RoleDto } from './dto/role.dto';
import { Role } from './entity/role.entity';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get(':value')
  async getByValue(@Param('value') value: string): Promise<Role> {
    return await this.roleService.getRoleByValue(value);
  }

  @Post()
  async create(@Body() roleDto: RoleDto): Promise<Role> {
    return await this.roleService.create(roleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.roleService.remove(id);
  }
}
