import { Injectable, Inject } from '@nestjs/common';
import { ModelClass } from 'objection';
import { User } from './user.entity';
import { UsersProfileService } from '../users-profile/users-profile.service';

@Injectable()
export class UsersService {

  constructor(
      private usersProfileService: UsersProfileService,
      @Inject('User') private readonly modelClass: ModelClass<User>
  ) {}

  findAll() {
    return this.modelClass.query().withGraphFetched('userProfile')
  }

  findById(id: number) {
    return this.modelClass.query().findById(id).withGraphFetched('userProfile');
  }

  create(props: Partial<User>) {
    return this.modelClass
        .query()
        .insert(props)
        .returning('*');
  }

  update(id: number, props: Partial<User>) {
    return this.modelClass
        .query()
        .patch(props)
        .where({ id })
        .returning('*')
        .first();
  }

  delete(id: number) {
    return this.modelClass
        .query()
        .delete()
        .where({ id })
        .returning('*')
        .first();
  }
}
