import { Body, Controller, Post } from '@nestjs/common';
import { iUser, iUserWithId } from '../interfaces';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Post('/reg')
  postItemDB(@Body() obj: iUser): iUserWithId[] | string {
    try {
      return this.appService.postItem(obj);
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Post('/login')
  checkItemDB(@Body() obj: iUser): string {
    try {
      return this.appService.checkItem(obj);
    } catch (error) {
      return (error as Error).message;
    }
  }
}
