import * as Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';
import { User } from '../users/user.entity';
import { UserProfile } from '../users-profile/user-profile.entity';

const KNEX_CONNECTION = Symbol('KNEX_CONNECTION');

const models = [User, UserProfile];
const modelProviders = models.map(model => {
  return {
    provide: model.name,
    useValue: model
  };
});

export const databaseProviders = [
  ...modelProviders,
  {
    provide: KNEX_CONNECTION,
    useFactory: async () => {
      const knex = Knex({
        client: 'pg',
        connection: 'postgres://postgres:nss22@127.0.0.1:5432/user_profile',
        debug: process.env.KNEX_DEBUG === 'true',
        ...knexSnakeCaseMappers()
      });

      Model.knex(knex);
      return knex;
    }
  }
];
