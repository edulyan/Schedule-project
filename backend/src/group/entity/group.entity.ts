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
}
