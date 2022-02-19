import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from '../../group/entity/group.entity';
import { Teacher } from '../../teacher/entity/teacher.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  classroom: number;

  @ManyToMany(() => Group, (group) => group.lessons, { eager: true })
  @JoinTable({ name: 'lesson_group' })
  groups: Group[];

  @ManyToOne(() => Teacher, (teacher) => teacher.lessons)
  teacher: Teacher;
}
