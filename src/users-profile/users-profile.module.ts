import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersProfileController } from './users-profile.controller';
import { UsersProfileService } from './users-profile.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersProfileController],
  providers: [UsersProfileService],
  exports: [UsersProfileService]
})
export class UsersProfileModule {}
