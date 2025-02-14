import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, OrdersModule, AuthModule],
})
export class AppModule {}
