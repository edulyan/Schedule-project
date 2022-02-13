import { Group } from '../../group/entity/group.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../../role/entity/role.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @ManyToOne(() => Group, (group) => group.students)
  group: Group;

  @ManyToMany(() => Role, (role) => role.students, { eager: true })
  @JoinTable({ name: 'student_roles' })
  roles: Role[];
}
