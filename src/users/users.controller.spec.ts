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
      expect(await userController.addData()).toBe(result);
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
      expect(await userController.userAdd(result)).toBe(result);
    });
  });
});
// import { Test, TestingModule } from '@nestjs/testing';
// import { UsersController } from './users.controller';
// import { UsersService } from './users.service';
// import { AuthService } from './auth.service';
// import { User } from './user.entity';

// describe('UsersController', () => {
//   let controller: UsersController;
//   let fakeUsersService: Partial<UsersService>;
//   let fakeAuthService: Partial<AuthService>;

//   beforeEach(async () => {
//     fakeUsersService = {
//       findOne: (id: number) => {
//         return Promise.resolve({
//           id,
//           email: 'asdf@asdf.com',
//           password: 'asdf',
//         } as User);
//       },
//       find: (email: string) => {
//         return Promise.resolve([{ id: 1, email, password: 'asdf' } as User]);
//       },
//       // remove: () => {},
//       // update: () => {},
//     };
//     fakeAuthService = {
//       // signup: () => {},
//       signin: (email: string, password: string) => {
//         return Promise.resolve({ id: 1, email, password } as User);
//       },
//     };

//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [UsersController],
//       providers: [
//         {
//           provide: UsersService,
//           useValue: fakeUsersService,
//         },
//         {
//           provide: AuthService,
//           useValue: fakeAuthService,
//         },
//       ],
//     }).compile();

//     controller = module.get<UsersController>(UsersController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

//   it('findAllUsers returns a list of users with the given email', async () => {
//     const users = await controller.findAllUsers('asdf@asdf.com');
//     expect(users.length).toEqual(1);
//     expect(users[0].email).toEqual('asdf@asdf.com');
//   });

//   it('findUser returns a single user with the given id', async () => {
//     const user = await controller.findUser('1');
//     expect(user).toBeDefined();
//   });

//   it('findUser throws an error if user with given id is not found', async (done) => {
//     fakeUsersService.findOne = () => null;
//     try {
//       await controller.findUser('1');
//     } catch (err) {
//       done();
//     }
//   });

//   it('signin updates session object and returns user', async () => {
//     const session = { userId: -10 };
//     const user = await controller.signin(
//       { email: 'asdf@asdf.com', password: 'asdf' },
//       session,
//     );

//     expect(user.id).toEqual(1);
//     expect(session.userId).toEqual(1);
//   });
// });
