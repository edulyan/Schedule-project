import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../role/entity/role.entity';
import { Group } from '../group/entity/group.entity';
import { Student } from './entity/student.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports: [TypeOrmModule.forFeature([Student, Group, Role])],
})
export class StudentModule {}