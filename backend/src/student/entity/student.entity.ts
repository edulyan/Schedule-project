import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from '../../group/entity/group.entity';
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
  password: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @ManyToOne(() => Group, (group) => group.students)
  group: Group;

  @OneToOne(() => Role, (role) => role.student, { cascade: true })
  @JoinColumn()
  role: Role;
}
