import { Injectable } from '@nestjs/common';
import orders from 'src/storage/orders';
import { iOrders, iOrdersWithId } from '../interfaces/index';

@Injectable()
export class OrdersService {
  getAllItem(): iOrdersWithId[] {
    if (!orders.length) throw new Error('The db is empty');
    return orders;
  }
  postItem(obj: iOrders): iOrdersWithId[] {
    this.isValidOrters(obj);
    if (!obj.userId || !obj.itemName) throw new Error('error');

    const newId: number =
      orders.length === 0 ? 1 : orders[orders.length - 1].id + 1;
    orders.push({
      id: newId,
      userId: obj.userId,
      itemName: obj.itemName,
    });

    return orders;
  }

  isValidOrters(obj: Partial<iOrders>) {
    if (obj.userId && !isNaN(+obj.userId)) throw new Error('error');
    if (obj.itemName && !isNaN(+obj.itemName)) throw new Error('error');
  }
}
