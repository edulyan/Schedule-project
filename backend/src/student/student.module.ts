import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../role/entity/role.entity';
import { Group } from '../group/entity/group.entity';
import { Student } from './entity/student.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { RoleModule } from '../role/role.module';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports: [RoleModule, TypeOrmModule.forFeature([Student, Group, Role])],
  exports: [StudentService],
})
export class StudentModule {}
