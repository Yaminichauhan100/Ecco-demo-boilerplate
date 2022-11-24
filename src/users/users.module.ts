import { Module, MiddlewareConsumer } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
//import { AuthService } from './auth.service';
//import { User } from './user.entity';
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
