import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CheckAytorization, ValidationOrder } from 'src/middlewares';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {
  configure(objMiddleware: MiddlewareConsumer) {
    objMiddleware
      .apply(ValidationOrder)
      .forRoutes({ path: '/orders', method: RequestMethod.POST });
    objMiddleware.apply(CheckAytorization).forRoutes('/orders');
  }
}
