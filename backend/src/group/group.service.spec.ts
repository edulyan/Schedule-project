import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Group } from './entity/group.entity';
import { GroupService } from './group.service';

const stackGroups = [
  {
    id: 2,
    title: 'A2',
  },
  {
    id: 3,
    title: 'A3',
  },
  {
    id: 4,
    title: 'A4',
  },
];

describe('GroupService', () => {
  let groupService: GroupService;

  const mockGroupsRepository = {
    getAll: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GroupService,
        {
          provide: getRepositoryToken(Group),
          useValue: mockGroupsRepository,
        },
      ],
    }).compile();

    groupService = module.get<GroupService>(GroupService);
  });

  // beforeEach(() => {
  //   mockGroupsRepository.create.mockReset();
  //   mockGroupsRepository.delete.mockReset();
  //   mockGroupsRepository.find.mockReset();
  //   mockGroupsRepository.findOne.mockReset();
  //   mockGroupsRepository.save.mockReset();
  //   mockGroupsRepository.update.mockReset();
  // });

  it('Successfully create group', async () => {
    mockGroupsRepository.create.mockReturnValue({
      title: 'A2',
    });
    mockGroupsRepository.save.mockReturnValue({
      title: 'A2',
    });

    const savedUser = await groupService.create({ title: 'A2' });

    expect(savedUser).toEqual({ title: 'A2' });
    expect(mockGroupsRepository.create).toHaveBeenCalledTimes(1);
    expect(mockGroupsRepository.save).toHaveBeenCalledTimes(1);
  });

  it('Successfully find all groups', async () => {
    mockGroupsRepository.find.mockReturnValue(stackGroups);

    const getGroups = await groupService.getAll();

    expect(getGroups).toHaveLength(3);
    expect(mockGroupsRepository.find).toHaveBeenCalledTimes(1);
  });

  it('Successfully find group by ID', async () => {
    mockGroupsRepository.findOne.mockReturnValue(stackGroups[1]);

    const getGroup = await groupService.getById(3);

    expect(getGroup).toMatchObject({ id: getGroup.id });
    expect(mockGroupsRepository.findOne).toHaveBeenCalledTimes(1);
  });

  it('Successfully delete group by ID', async () => {
    mockGroupsRepository.delete.mockReturnValue(stackGroups);

    const removeGroup = await groupService.remove(3);

    expect(removeGroup).toBe(true);
    expect(mockGroupsRepository.delete).toHaveBeenCalledTimes(1);
  });
});
