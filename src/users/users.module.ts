import { Module, MiddlewareConsumer } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { CurrentUserMiddleware } from './middlewares/current-user.middleware';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
  //exports: [TypeOrmModule],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}
