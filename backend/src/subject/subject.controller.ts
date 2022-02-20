import { Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateSubjectDto } from './dto/createSubject.dto';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  async getAll() {
    return await this.subjectService.getAll();
  }

  @Get(':id')
  async getById(id: number) {
    return await this.subjectService.getById(id);
  }

  @Post()
  async create(subject: CreateSubjectDto) {
    return await this.subjectService.create(subject);
  }

  @Delete(':id')
  async delete(id: number) {
    return await this.subjectService.remove(id);
  }
}
