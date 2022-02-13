import { Group } from '../../group/entity/group.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
}
