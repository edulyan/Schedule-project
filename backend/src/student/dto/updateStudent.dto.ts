import { IsString } from 'class-validator';

export class UpdateStudentDto {
  readonly id: number;
  @IsString()
  readonly firstname: string;
  @IsString()
  readonly lastname: string;
  readonly password: string;
  readonly email: string;
  readonly phone: string;
}
