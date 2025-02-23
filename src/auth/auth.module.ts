import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { Validation } from 'src/middlewares';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {
  configure(objMiddleware: MiddlewareConsumer) {
    objMiddleware
      .apply(Validation)
      .forRoutes({ path: '/auth/reg', method: RequestMethod.POST });
  }
}
