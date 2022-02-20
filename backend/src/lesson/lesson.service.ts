import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/createLesson.dto';
import { Lesson } from './entity/lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async getAll(): Promise<Lesson[]> {
    return await this.lessonRepository.find();
  }

  async getById(id: number): Promise<Lesson> {
    return await this.lessonRepository.findOne(id);
  }

  async create(lesson: CreateLessonDto): Promise<Lesson> {
    const newLesson = this.lessonRepository.create(lesson);
    return await this.lessonRepository.save(newLesson);
  }

  async remove(id: number): Promise<void> {
    await this.lessonRepository.delete(id);
  }
}
