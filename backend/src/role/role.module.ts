import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from '../teacher/entity/teacher.entity';
import { Student } from '../student/entity/student.entity';
import { Role } from './entity/role.entity';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [TypeOrmModule.forFeature([Role, Student, Teacher])],
})
export class RoleModule {}
