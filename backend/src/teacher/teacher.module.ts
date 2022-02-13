import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { Teacher } from './entity/teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [TeacherService],
  controllers: [TeacherController],
  imports: [TypeOrmModule.forFeature([Teacher])],
})
export class TeacherModule {}
