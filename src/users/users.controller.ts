import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';

import { UsersService } from '../users/users.service';

import { AuthGuard } from '../guards/auth.guard';

@Controller('users')
export class UsersController {
  static userList: any;
  constructor(private userservice: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  userInfo(): string {
    return 'USER DATA';
  }

  @Post('add-data')
  addData(): string {
    return 'Data added';
  }
  @Get('user-list')
  userList(): any {
    return this.userservice.findData();
  }
  @Post('user-add')
  userAdd(@Body() record: any) {
    console.log(record);
    return this.userservice.create(record);
  }
}

// @Controller('auth')
// @Serialize(UserDto)
// export class UsersController {
//   constructor(
//     private usersService: UsersService,
//     private authService: AuthService,
//   ) {}

//   @Get('/whoami')
//   @UseGuards(AuthGuard)
//   whoAmI(@CurrentUser() user: User) {
//     return user;
//   }

//   @Post('/signout')
//   signOut(@Session() session: any) {
//     session.userId = null;
//   }

//   @Post('/signup')
//   async createUser(@Body() body: CreateUserDto, @Session() session: any) {
//     const user = await this.authService.signup(body.email, body.password);
//     session.userId = user.id;
//     return user;
//   }

//   @Post('/signin')
//   async signin(@Body() body: CreateUserDto, @Session() session: any) {
//     const user = await this.authService.signin(body.email, body.password);
//     session.userId = user.id;
//     return user;
//   }

//   @Get('/:id')
//   async findUser(@Param('id') id: string) {
//     const user = await this.usersService.findOne(parseInt(id));
//     if (!user) {
//       throw new NotFoundException('user not found');
//     }
//     return user;
//   }

//   @Get()
//   findAllUsers(@Query('email') email: string) {
//     return this.usersService.find(email);
//   }

//   @Delete('/:id')
//   removeUser(@Param('id') id: string) {
//     return this.usersService.remove(parseInt(id));
//   }

//   @Patch('/:id')
//   updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
//     return this.usersService.update(parseInt(id), body);
//   }
// }
