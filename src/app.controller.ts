/* eslint-disable prettier/prettier */
import { Body, Controller,  HttpCode, Post, Request, } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import UserData from './entities/AccountNumberData.entity';
import CarData from './entities/ProfileData.entity';
import ProfileData from './entities/ProfileData.entity';

interface AuthenticatedRequest extends Request {
  user: UserData;
  car: CarData;
  carPic: CarPicture;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) { }

  @Post('user')
  @HttpCode(200)
  async addUser(@Body() Profiledata: ProfileData) {
    const userRepo = this.dataSource.getRepository(ProfileData);
    Profiledata.id = undefined;
    const user = new UserData();
    user.username = userData.username;
    user.email = Profiledata.email;
    delete user.passwordAuth;
    delete user.password;
    return user;
  }
}
