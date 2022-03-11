import { Module } from '@nestjs/common';
import { TeacherModule } from '../teacher/teacher.module';
import { StudentModule } from '../student/student.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    StudentModule,
    TeacherModule,
    JwtModule.register({
      secret: 'SECRET',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
})
export class AuthModule {}
