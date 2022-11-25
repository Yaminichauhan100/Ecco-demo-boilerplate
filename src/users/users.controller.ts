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
