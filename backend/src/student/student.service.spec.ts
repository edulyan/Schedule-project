import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Role } from '../role/entity/role.entity';
import { Group } from '../group/entity/group.entity';
import { Student } from './entity/student.entity';
import { StudentService } from './student.service';

const stackStudents = [
  {
    id: 2,
    firstname: 'Oleg',
    lastname: 'Kozlov',
    password: '123',
    email: '123@mail.com',
    phone: '8-999-900-90-90',
    role: {
      id: 1,
      name: 'Админ',
    },
    group: 123,
  },
  {
    id: 3,
    firstname: 'Michail',
    lastname: 'Volnov',
    password: '123',
    email: '1234@mail.com',
    phone: '8-888-800-80-80',
    role: {
      id: 1,
      name: 'Админ',
    },
    group: 123,
  },
  //   {
  //     id: 4,
  //     firstname: 'Maria',
  //     lastname: 'Telnova',
  //     password: '123',
  //     email: '12345@mail.com',
  //     phone: '8-966-660-60-60',
  //     role: {
  //       id: 1,
  //       name: 'Админ',
  //     },
  //     group: 123,
  //   },
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
      ],
    }).compile();

    studentService = module.get<StudentService>(StudentService);
  });

  it('Successfully get all students', async () => {
    mockStudentRepository.find.mockReturnValue(stackStudents);

    const getStudents = await studentService.getAll();

    expect(getStudents).toHaveLength(3);
    expect(mockStudentRepository.find).toHaveBeenCalledTimes(1);
  });
});
