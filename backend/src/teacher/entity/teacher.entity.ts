import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
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

  @ManyToOne(() => Role, (role) => role.teachers)
  role: Role;

  @OneToMany(() => Lesson, (lesson) => lesson.teacher)
  lessons: Lesson[];
}
