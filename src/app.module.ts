import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersProfileModule } from './users-profile/users-profile.module';

@Module({
  imports: [UsersModule, UsersProfileModule]
})
export class ApplicationModule {}
