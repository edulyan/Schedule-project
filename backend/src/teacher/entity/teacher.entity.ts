import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
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
  password: string;

  @Column()
  department: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @OneToOne(() => Role)
  @JoinColumn()
  role: Role;

  @OneToMany(() => Lesson, (lesson) => lesson.teacher)
  lessons: Lesson[];

  @ManyToMany(() => Subject, (subject) => subject.teachers, { eager: true })
  @JoinTable({ name: 'teacher_subjects' })
  subjects: Subject[];
}
