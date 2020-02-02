import { Injectable, Inject } from '@nestjs/common';
import { ModelClass } from 'objection';
import { UserProfile } from './user-profile.entity';

@Injectable()
export class UsersProfileService {

  constructor(@Inject('UserProfile') private readonly modelClass: ModelClass<UserProfile>) {}

  findAll() {
    return this.modelClass.query();
  }

  findById(id: number) {
    return this.modelClass.query().findById(id);
  }

  async create(props: Partial<UserProfile>) {
    return this.modelClass
        .query()
        .insert(props)
        .returning('*');
  }

  update(id: number, props: Partial<UserProfile>) {
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
