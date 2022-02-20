import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubjectDto } from './dto/createSubject.dto';
import { Subject } from './entity/subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject) private subjectRepository: Repository<Subject>,
  ) {}

  async getAll(): Promise<Subject[]> {
    return await this.subjectRepository.find();
  }

  async getById(id: number): Promise<Subject> {
    return await this.subjectRepository.findOne(id);
  }

  async getTitle(title: string): Promise<Subject> {
    const userName = await this.subjectRepository.findOne({ title });
    return userName;
  }

  async create(subject: CreateSubjectDto): Promise<Subject> {
    const newSubject = this.subjectRepository.create(subject);
    return await this.subjectRepository.save(newSubject);
  }

  async remove(id: number): Promise<void> {
    await this.subjectRepository.delete(id);
  }
}
