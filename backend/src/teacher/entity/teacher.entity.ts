import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from '../../group/entity/group.entity';
import { Role } from '../../role/entity/role.entity';
import { Lesson } from '../../lesson/entity/lesson.entity';
import { Subject } from '../../subject/entity/subject.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  department: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @ManyToMany(() => Group, (group) => group.teachers, { eager: true })
  @JoinTable({ name: 'teacher_groups' })
  group: Group[];

  @ManyToMany(() => Role, (role) => role.teachers, { eager: true })
  @JoinTable({ name: 'teacher_roles' })
  roles: Role[];

  @ManyToMany(() => Subject, (subject) => subject.teachers, { eager: true })
  @JoinTable({ name: 'teacher_subjects' })
  subjects: Subject[];

  @OneToMany(() => Lesson, (lesson) => lesson.teacher)
  lessons: Lesson[];
}
