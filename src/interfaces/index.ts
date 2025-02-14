export interface iUser {
  username: string;
  email: string;
  password: string;
}

export interface iUserWithId extends iUser {
  id: number;
}
export interface iOrders {
  userId: number;
  itemName: string;
}

export interface iOrdersWithId extends iOrders {
  id: number;
}
