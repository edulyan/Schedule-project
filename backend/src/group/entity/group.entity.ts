import { Student } from '../../student/entity/student.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
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

  @OneToMany(() => Lesson, (lesson) => lesson.group)
  lessons: Lesson[];
}
