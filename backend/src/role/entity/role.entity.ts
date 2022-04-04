import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from '../../student/entity/student.entity';
import { Teacher } from '../../teacher/entity/teacher.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Student, (student) => student.role)
  students: Student[];

  @OneToMany(() => Teacher, (teacher) => teacher.role)
  teachers: Teacher[];
}
