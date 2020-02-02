import {Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserProfile } from './user-profile.entity';
import { UsersProfileService } from './users-profile.service';

@Controller('profiles')
export class UsersProfileController {

  constructor (private readonly usersProfileService: UsersProfileService) {}

  @HttpCode(200)
  @Get()
  findAll() {
    return this.usersProfileService.findAll();
  }

  @HttpCode(200)
  @Get(':id')
  findByUserId( @Param('id', new ParseIntPipe()) id: number) {
    return this.usersProfileService.findById(id);
  }

  @HttpCode(201)
  @Post()
  create(@Body() userProfile: Partial<UserProfile>) {
    return this.usersProfileService.create(userProfile);
  }

  @HttpCode(200)
  @Put(':id')
  update(
      @Param('id', new ParseIntPipe()) id: number,
      @Body() props: Partial<UserProfile>
  ) {
    return this.usersProfileService.update(id, props);
  }

  @HttpCode(204)
  @Delete(':id')
  removeById(@Param('id', new ParseIntPipe()) id: number) {
    return this.usersProfileService.delete(id);
  }
}
