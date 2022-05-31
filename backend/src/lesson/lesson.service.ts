import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupService } from '../group/group.service';
import { TeacherService } from '../teacher/teacher.service';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/createLesson.dto';
import { Lesson } from './entity/lesson.entity';
import { UpdateLessonDto } from './dto/updateLesson.dto';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
    private readonly groupService: GroupService,
    private readonly teacherService: TeacherService,
  ) {}

  async getAll(): Promise<Lesson[]> {
    return await this.lessonRepository.find({
      relations: ['group', 'teacher'],
    });
  }

  async getById(id: number): Promise<Lesson> {
    return await this.lessonRepository.findOne(id, {
      relations: ['group', 'teacher'],
    });
  }

  async search(query: string): Promise<Lesson[]> {
    return await this.lessonRepository.find({
      where: { title: query },
      relations: ['group', 'teacher'],
    });
  }

  async create(lesson: CreateLessonDto): Promise<Lesson> {
    const newLesson = this.lessonRepository.create(lesson);
    return await this.lessonRepository.save(newLesson);
  }

  async addGroup(lessonId: number, groupId: number): Promise<Lesson> {
    const lessonTarget = await this.getById(lessonId);
    const groupTarget = await this.groupService.getById(groupId);

    lessonTarget.group = groupTarget;

    await this.lessonRepository.save(lessonTarget);

    return lessonTarget;
  }

  async addTeacher(lessonId: number, teacherId: number): Promise<Lesson> {
    const lessonTarget = await this.getById(lessonId);
    const teacherTarget = await this.teacherService.getById(teacherId);

    lessonTarget.teacher = teacherTarget;

    await this.lessonRepository.save(lessonTarget);

    return lessonTarget;
  }

  async removeGroupAtLesson(lessonId: number): Promise<void> {
    const lesson = await this.getById(lessonId);

    lesson.group = null;

    await this.lessonRepository.save(lesson);
  }

  async removeTeacherAtLesson(lessonId: number): Promise<void> {
    const lesson = await this.getById(lessonId);

    lesson.teacher = null;

    await this.lessonRepository.save(lesson);
  }

  async update(lessonDto: UpdateLessonDto): Promise<Lesson> {
    return await this.lessonRepository.save(lessonDto);
  }

  async remove(id: number): Promise<void> {
    await this.lessonRepository.delete(id);
  }
}
