import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Lesson } from '../../lesson/entity/lesson.entity';
import { Teacher } from '../../teacher/entity/teacher.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Lesson, (lesson) => lesson.group)
  lessons: Lesson[];
}
