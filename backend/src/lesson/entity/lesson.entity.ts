import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @ManyToOne(() => Group, (group) => group.lessons)
  group: Group;

  @ManyToOne(() => Teacher, (teacher) => teacher.lessons)
  teacher: Teacher;
}
