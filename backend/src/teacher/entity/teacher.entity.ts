import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from '../../group/entity/group.entity';
import { Role } from '../../role/entity/role.entity';

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
}
