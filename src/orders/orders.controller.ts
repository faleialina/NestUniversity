import { Body, Controller, Get, Post } from '@nestjs/common';
import { iOrders, iOrdersWithId } from '../interfaces';
import { OrdersService } from './orders.service';

@Controller('/orders')
export class OrdersController {
  constructor(private readonly appService: OrdersService) {}

  @Get()
  getItemDB(): iOrdersWithId[] | string {
    try {
      return this.appService.getAllItem();
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Post()
  postItemDB(@Body() obj: iOrders): iOrdersWithId[] | string {
    try {
      return this.appService.postItem(obj);
    } catch (error) {
      return (error as Error).message;
    }
  }
}
