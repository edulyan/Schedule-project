import { IGroup } from '../group/group.interface';
import { ITeacher } from '../teacher/teacher.interface';

export interface ILesson {
  id: number;
  title: string;
  classroom: number;
  group: IGroup;
  teacher: ITeacher;
}
