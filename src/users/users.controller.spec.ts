import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let userController: UsersController;
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    userController = module.get<UsersController>(UsersController);
    userService = module.get<UsersService>(UsersService);
  });
  describe('addData', () => {
    it('should return an user list ', async () => {
      const result = 'Data added';
      expect(userController.addData()).toBe(result);
    });
  });

  describe('userList', () => {
    it('should return an user list ', async () => {
      const result = [];
      jest.spyOn(userService, 'findData').mockImplementation(() => result);
      expect(await userController.userList()).toBe(result);
    });
  });
  describe('userAdd', () => {
    it('should not create  the user  ', async () => {
      const result = '';
      jest.spyOn(userService, 'create').mockImplementation(() => result);
      expect(userController.userAdd(result)).toBe(result);
    });
  });
});
