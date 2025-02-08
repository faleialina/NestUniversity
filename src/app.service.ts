import { Injectable } from '@nestjs/common';
import { iUser, iUserWithId } from './interfaces/user.interface';

const data = [
  {
    id: 1,
    name: 'Object One',
    description: 'This is the description for object one.',
  },
  {
    id: 2,
    name: 'Object Two',
    description: 'This is the description for object two.',
  },
  {
    id: 3,
    name: 'Object Three',
    description: 'This is the description for object three.',
  },
  {
    id: 4,
    name: 'Object Four',
    description: 'This is the description for object four.',
  },
];

@Injectable()
export class AppService {
  getAllItem(): iUserWithId[] {
    if (!data.length) throw new Error('The db is empty');
    return data;
  }
  postItem(obj: iUser): iUserWithId[] {
    this.isValidUser(obj);
    if (!obj.description || !obj.name) throw new Error('error');
    // if (typeof obj !== 'iUser') throw new Error('error');
    const newId: number = data.length === 0 ? 1 : data[data.length - 1].id + 1;
    data.push({ id: newId, name: obj.name, description: obj.description });
    // data.push({ ...obj, id: newId });
    return data;
  }
  putItem(obj: iUser, id: string): iUserWithId[] {
    this.isValidUser(obj);
    if (!obj.description || !obj.name) throw new Error('error');
    const elem = data.findIndex((el) => el.id === +id);
    data[elem] = { ...data[elem], ...obj };
    return data;
  }
  patchItem(obj: Partial<iUser>, id: string): iUserWithId[] {
    this.isValidUser(obj);
    if (!obj.description && !obj.name) throw new Error('error');
    const elem = data.findIndex((el) => el.id === +id);
    data[elem] = { ...data[elem], ...obj };
    return data;
  }
  deleteItem(id: string): iUserWithId[] {
    if (typeof id !== 'string') throw new Error('error');
    if (data.findIndex((el) => el.id === +id) === -1) throw new Error('error');
    const elem = data.findIndex((el) => el.id === +id);
    data.splice(elem, 1);
    return data;
  }
  isValidUser(obj: Partial<iUser>) {
    if (obj.name && !isNaN(+obj.name)) throw new Error('error');
    if (obj.description && !isNaN(+obj.description)) throw new Error('error');
  }
}
