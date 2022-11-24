import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('create', () => {
    it('should return listing of assays', async () => {
      const result = userService.create([]);
      expect(result).toEqual('Created successfully');
    });
  });

  describe('findData', () => {
    it('should return listing of assays', async () => {
      const result = userService.findData();
      expect(result).toEqual([]);
    });
  });
});
