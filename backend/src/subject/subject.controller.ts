import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSubjectDto } from './dto/createSubject.dto';
import { Subject } from './entity/subject.entity';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  async getAll() {
    return await this.subjectService.getAll();
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
  async create(@Body() subject: CreateSubjectDto): Promise<Subject> {
    return await this.subjectService.create(subject);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() subject: CreateSubjectDto) {
    return await this.subjectService.update(id, subject);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.subjectService.remove(id);
  }
}
