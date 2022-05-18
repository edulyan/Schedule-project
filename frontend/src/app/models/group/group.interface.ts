import { ILesson } from '../lesson/lesson.interface';
import { IStudent } from '../student/student.interface';

export interface IGroup {
  id: number;
  title: string;
  students: IStudent[];
  lessons: ILesson[];
}
