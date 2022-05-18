import { IsString } from 'class-validator';

export class UpdateTeacherDto {
  id: number;
  @IsString()
  readonly firstname: string;
  @IsString()
  readonly lastname: string;
  readonly password: string;
  readonly department: string;
  readonly email: string;
  readonly phone: string;
  //group
}
