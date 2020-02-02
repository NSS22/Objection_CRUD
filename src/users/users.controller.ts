import {Body, Controller, HttpCode, Param, ParseIntPipe, Delete, Get, Post, Put } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @HttpCode(200)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @HttpCode(200)
  @Get(':id')
  findById( @Param('id', new ParseIntPipe()) id: number) {
    return this.usersService.findById(id);
  }

  @HttpCode(201)
  @Post()
  create(@Body() user: Partial<User>) {
    return this.usersService.create(user);
  }

  @HttpCode(200)
  @Put(':id')
  update(
      @Param('id', new ParseIntPipe()) id: number,
      @Body() props: Partial<User>
  ) {
    return this.usersService.update(id, props);
  }

  @HttpCode(204)
  @Delete(':id')
  removeById(@Param('id', new ParseIntPipe()) id: number) {
    return this.usersService.delete(id);
  }
}
