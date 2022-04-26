import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupService } from '../group/group.service';
import { SubjectService } from '../subject/subject.service';
import { TeacherService } from '../teacher/teacher.service';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/createLesson.dto';
import { Lesson } from './entity/lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
    private readonly groupService: GroupService,
    private readonly subjectService: SubjectService,
    private readonly teacherService: TeacherService,
  ) {}

  async getAll(): Promise<Lesson[]> {
    return await this.lessonRepository.find({
      relations: ['group', 'subject', 'teacher'],
    });
  }

  async getById(id: number): Promise<Lesson> {
    return await this.lessonRepository.findOne(id, {
      relations: ['group', 'subject', 'teacher'],
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

  async addSubject(lessonId: number, subjectId: number): Promise<Lesson> {
    const lessonTarget = await this.getById(lessonId);
    const subjectTarget = await this.subjectService.getById(subjectId);

    lessonTarget.subject = subjectTarget;

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

  async removeSubjectAtLesson(lessonId: number): Promise<void> {
    const lesson = await this.getById(lessonId);

    lesson.subject = null;

    await this.lessonRepository.save(lesson);
  }

  async removeTeacherAtLesson(lessonId: number): Promise<void> {
    const lesson = await this.getById(lessonId);

    lesson.teacher = null;

    await this.lessonRepository.save(lesson);
  }

  async update(id: number, lessonDto: CreateLessonDto): Promise<void> {
    await this.lessonRepository.update(id, lessonDto);
  }

  async remove(id: number): Promise<void> {
    await this.lessonRepository.delete(id);
  }
}
