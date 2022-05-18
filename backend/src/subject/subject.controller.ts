import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateSubjectDto } from './dto/createSubject.dto';
import { UpdateSubjectDto } from './dto/updateSubject.dto';
import { Subject } from './entity/subject.entity';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  async getAll() {
    return await this.subjectService.getAll();
  }

  @Get('search')
  async search(@Query('query') query: string) {
    return this.subjectService.search(query);
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.subjectService.getById(id);
  }

  @Post(':title')
  async getTitle(@Param('title') title: string) {
    return await this.subjectService.getTitle(title);
  }

  @Post()
  async create(@Body() subject: CreateSubjectDto) {
    return await this.subjectService.create(subject);
  }

  @Put()
  async update(@Body() subject: UpdateSubjectDto) {
    return await this.subjectService.update(subject);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.subjectService.remove(id);
  }
}
