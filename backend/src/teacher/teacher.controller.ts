import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from '../auth/roles-auth.decorator';
import { CreateTeacherDto } from './dto/createTeacher.dto';
import { TeacherService } from './teacher.service';
import { RolesGuard } from '../auth/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  // @Roles('ADMIN')
  // @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() {
    return await this.teacherService.getAll();
  }

  @Get('search')
  @UsePipes(ValidationPipe)
  search(@Query('query') query: string) {
    return this.teacherService.search(query);
  }

  @Roles('ADMIN')
  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.teacherService.getById(id);
  }

  @Post()
  async create(@Body() teacherDto: CreateTeacherDto) {
    return await this.teacherService.create(teacherDto);
  }

  @Post('/addRoleToTeacher/:teacherId/:roleId')
  async addRole(
    @Param('teacherId') teacherId: number,
    @Param('roleId') roleId: number,
  ) {
    return await this.teacherService.addRole(teacherId, roleId);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() teacherDto: CreateTeacherDto) {
    return await this.teacherService.update(id, teacherDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.teacherService.remove(id);
  }
}
