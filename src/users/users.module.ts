import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CheckAytorization, Validation } from 'src/middlewares';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {
  configure(objMiddleware: MiddlewareConsumer) {
    objMiddleware
      .apply(Validation)
      .forRoutes({ path: '/users', method: RequestMethod.POST });
    objMiddleware.apply(CheckAytorization);
    objMiddleware.apply(CheckAytorization).forRoutes('/users');
  }
}
