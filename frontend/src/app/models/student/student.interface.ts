import { IGroup } from '../group/group.interface';

export interface IStudent {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  phone: string;
  group_title: IGroup;
}
