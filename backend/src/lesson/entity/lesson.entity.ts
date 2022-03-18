import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Subject } from '../../subject/entity/subject.entity';
import { Group } from '../../group/entity/group.entity';
import { Teacher } from '../../teacher/entity/teacher.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  time: string;

  @Column()
  classroom: number;

  @ManyToOne(() => Group, (group) => group.lessons)
  group: Group;

  @ManyToOne(() => Subject, (subject) => subject.lessons)
  subject: Subject;

  @ManyToOne(() => Teacher, (teacher) => teacher.lessons)
  teacher: Teacher;
}
