import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { Teacher } from './entity/teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../role/entity/role.entity';
import { Group } from '../group/entity/group.entity';

@Module({
  providers: [TeacherService],
  controllers: [TeacherController],
  imports: [TypeOrmModule.forFeature([Teacher, Role, Group])],
})
export class TeacherModule {}
