import { Injectable } from '@nestjs/common';
import users from 'src/storage/users';
import { iUser, iUserWithId } from '../interfaces';

@Injectable()
export class AuthService {
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
  checkItem(obj: iUser): string {
    this.isValidUser(obj);
    if (!obj.username || !obj.password)
      throw new Error('There are incomplete fields');
    const checkUser = users.some(
      (el) => el.username == obj.username && el.password == obj.password,
    );

    return checkUser ? 'Вход выполнен' : 'Неверные данные';
  }
  isValidUser(obj: Partial<iUser>) {
    if (obj.username && !isNaN(+obj.username)) throw new Error('error');
    if (obj.email && !isNaN(+obj.email)) throw new Error('error');
    if (obj.password && !isNaN(+obj.password)) throw new Error('error');
  }
}
