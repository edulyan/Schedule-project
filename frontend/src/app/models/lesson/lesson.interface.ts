import { IGroup } from '../group/group.interface';
import { ISubject } from '../subject/subject.interface';
import { ITeacher } from '../teacher/teacher.interface';

export interface ILesson {
  id: number;
  classroom: number;
  group: IGroup;
  subject: ISubject;
  teacher: ITeacher;
}
