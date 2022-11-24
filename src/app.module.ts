import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { AppLoggerMiddleware } from './app.middleware';
// import cookieSession from 'cookie-session';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './users/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    // TypeOrmModule.forFeature([User]),
    // TypeOrmModule.forRoot(),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
//   constructor(private configService: ConfigService) {}

//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(
//         AppLoggerMiddleware,
//         cookieSession({
//           keys: [this.configService.get('COOKIE_KEY')],
//         }),
//       )
//       .forRoutes('*');
//   }
// }
