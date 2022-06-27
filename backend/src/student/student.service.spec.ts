import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Role } from '../role/entity/role.entity';
import { Group } from '../group/entity/group.entity';
import { Student } from './entity/student.entity';
import { StudentService } from './student.service';
import { RoleService } from '../role/role.service';
import { GroupService } from '../group/group.service';

const stackStudents = [
  {
    id: 2,
    firstname: 'Oleg',
    lastname: 'Kozlov',
    password: '123',
    email: 'Oleg@mail.com',
    phone: '8-999-900-90-90',
    role: {
      id: 1,
      name: 'Админ',
    },
    group: {
      id: 2,
      title: 'A202',
    },
  },
  {
    id: 3,
    firstname: 'Oleg',
    lastname: 'Volnov',
    password: '123',
    email: 'Michail@mail.com',
    phone: '8-888-800-80-80',
    role: {
      id: 1,
      name: 'Админ',
    },
    group: {
      id: 1,
      title: 'A101',
    },
  },
  {
    id: 4,
    firstname: 'Maria',
    lastname: 'Telnova',
    password: '123',
    email: 'Maria@mail.com',
    phone: '8-966-660-60-60',
    role: {
      id: 1,
      name: 'Админ',
    },
    group: {
      id: 3,
      title: 'A303',
    },
  },
];

describe('StudentService', () => {
  let studentService: StudentService;

  const mockStudentRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentService,
        {
          provide: getRepositoryToken(Student),
          useValue: mockStudentRepository,
        },
        {
          provide: RoleService,
          useValue: jest.fn(),
        },
        {
          provide: GroupService,
          useValue: jest.fn(),
        },
      ],
    }).compile();

    studentService = module.get<StudentService>(StudentService);
  });

  it('Successfully get all students', async () => {
    mockStudentRepository.find.mockReturnValue(stackStudents);

    const getStudents = await studentService.getAll();

    expect(getStudents).toEqual(stackStudents);
    expect(getStudents).toHaveLength(3);
    expect(mockStudentRepository.find).toHaveBeenCalledTimes(1);
  });

  it('Successfully get student by ID', async () => {
    mockStudentRepository.findOne.mockReturnValue(stackStudents[0]);
    const getStudent = await studentService.getById(2);

    expect(getStudent).toEqual(stackStudents[0]);
  });

  it('Successfully get student by Email', async () => {
    mockStudentRepository.findOne.mockReturnValue(stackStudents[0]);
    const getStudent = await studentService.getByEmail('Oleg@mail.com');

    expect(getStudent).toEqual(stackStudents[0]);
  });

  it('Successfully get(search) students by Firstname', async () => {
    mockStudentRepository.findOne.mockReturnValue(stackStudents);
    const getStudents = await studentService.search('Oleg');
    console.log(getStudents);

    expect(getStudents).toEqual(stackStudents);
  });

  // it('Successfully create student', async () => {
  //   const student = await studentService.create({
  //   firstname: 'Maria',
  //   lastname: 'Telnova',
  //   password: '123',
  //   email: 'Maria@mail.com',
  //   phone: '8-966-660-60-60',
  //   role: {
  //     id: 1,
  //     name: 'Админ',
  //   },
  //   group: {
  //     id: 3,
  //     title: 'A303',
  //   },
  //   });
  // })
});
