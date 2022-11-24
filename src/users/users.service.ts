import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findOne(_userId: any) {
    throw new Error('Method not implemented.');
  }
  private readonly users: any[] = [];

  create(data: any) {
    this.users.push(data);
    return 'Created successfully';
  }
  findData(): any[] {
    return this.users;
  }
}
