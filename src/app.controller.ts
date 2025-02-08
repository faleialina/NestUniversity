import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { iUser, iUserWithId } from './interfaces/user.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getItemDB(): iUserWithId[] | string {
    try {
      return this.appService.getAllItem();
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Post()
  postItemDB(@Body() obj: iUser): iUserWithId[] | string {
    try {
      return this.appService.postItem(obj);
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Put(':id')
  putItemDB(
    @Body() obj: iUser,
    @Param('id') id: string,
  ): iUserWithId[] | string {
    try {
      return this.appService.putItem(obj, id);
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Patch(':id')
  patchItemDB(
    @Body() obj: Partial<iUser>,
    @Param('id') id: string,
  ): iUserWithId[] | string {
    try {
      return this.appService.patchItem(obj, id);
    } catch (error) {
      return (error as Error).message;
    }
  }

  @Delete(':id')
  deleteItemDB(@Param('id') id: string): iUserWithId[] | string {
    try {
      return this.appService.deleteItem(id);
    } catch (error) {
      return (error as Error).message;
    }
  }
}
