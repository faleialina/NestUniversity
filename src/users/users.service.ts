import { Injectable } from '@nestjs/common';
import users from 'src/storage/users';
import { iUser, iUserWithId } from '../interfaces';

@Injectable()
export class UsersService {
  getAllItem(): iUserWithId[] {
    if (!users.length) throw new Error('The db is empty');
    return users;
  }
  postItem(obj: iUser): iUserWithId[] {
    this.isValidUser(obj);
    if (!obj.username || !obj.email || !obj.password) throw new Error('error');
    const newId: number =
      users.length === 0 ? 1 : users[users.length - 1].id + 1;
    users.push({
      id: newId,
      username: obj.username,
      email: obj.email,
      password: obj.password,
    });
    return users;
  }
  putItem(obj: iUser, id: string): iUserWithId[] {
    this.isValidUser(obj);
    if (!obj.username || !obj.email || !obj.password) throw new Error('error');
    const elem = users.findIndex((el) => el.id === +id);
    users[elem] = { ...users[elem], ...obj };
    return users;
  }
  patchItem(obj: Partial<iUser>, id: string): iUserWithId[] {
    this.isValidUser(obj);
    if (!obj.email && !obj.password && !obj.username) throw new Error('error');
    const elem = users.findIndex((el) => el.id === +id);
    users[elem] = { ...users[elem], ...obj };
    return users;
  }
  deleteItem(id: string): iUserWithId[] {
    if (typeof id !== 'string') throw new Error('error');
    if (users.findIndex((el) => el.id === +id) === -1) throw new Error('error');
    const elem = users.findIndex((el) => el.id === +id);
    users.splice(elem, 1);
    return users;
  }
  isValidUser(obj: Partial<iUser>) {
    if (obj.username && !isNaN(+obj.username)) throw new Error('error');
    if (obj.email && !isNaN(+obj.email)) throw new Error('error');
    if (obj.password && !isNaN(+obj.password)) throw new Error('error');
  }
}
