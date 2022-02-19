import { Student } from '../../student/entity/student.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Teacher } from '../../teacher/entity/teacher.entity';
import { Lesson } from '../../lesson/entity/lesson.entity';
import { Subject } from '../../subject/entity/subject.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Student, (student) => student.group)
  students: Student[];

  @ManyToMany(() => Teacher, (teacher) => teacher.group)
  @JoinColumn()
  teachers: Teacher[];

  @ManyToMany(() => Lesson, (lesson) => lesson.groups)
  @JoinColumn()
  lessons: Lesson[];

  @ManyToMany(() => Subject, (subject) => subject.groups)
  @JoinColumn()
  subjects: Subject[];
}
