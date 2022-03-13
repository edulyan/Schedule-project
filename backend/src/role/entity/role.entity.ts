import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from '../../student/entity/student.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Student, (student) => student.role)
  student: Student;
}
