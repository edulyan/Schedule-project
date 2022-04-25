import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateGroupDto } from './dto/createGroup.dto';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  async getAll() {
    return await this.groupService.getAll();
  }

  @Get(':id')
  async getById(id: number) {
    return await this.groupService.getById(id);
  }

  @Post()
  async create(@Body() groupDto: CreateGroupDto) {
    return await this.groupService.create(groupDto);
  }

  @Delete('removeGroupAtStudent/:groupId/:studentId')
  async removeGroupAtStudent(
    @Param('groupId') groupId: number,
    @Param('studentId') studentId: number,
  ) {
    return await this.groupService.removeGroupAtStudent(groupId, studentId);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.groupService.remove(id);
  }
}
