import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Student } from '../../student/entity/student.entity';
import { Teacher } from '../../teacher/entity/teacher.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Student, (student) => student.roles)
  @JoinColumn()
  students: Student[];

  @ManyToMany(() => Teacher, (teacher) => teacher.roles)
  @JoinColumn()
  teachers: Teacher[];
}
