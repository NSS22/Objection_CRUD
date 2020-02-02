import { Model } from 'objection';
import { User } from '../users/user.entity';

export class UserProfile extends Model {
  static get tableName() {
    return 'profiles';
  }

  readonly id: number;
  firstName: string;
  lastName: string;
  age: number;
  userId?: number;
  user?: User;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'age'],

      properties: {
        id: { type: 'integer' },
        userId: { type: ['integer', 'null' ] },
        firstName: { type: 'string', minLength: 1, maxLength: 24 },
        lastName: { type: 'string', minLength: 1, maxLength: 24 },
        age: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: '${__dirname}/../users/user.entity',
        join: {
          from: 'profiles.userId',
          to: 'users.id'
        }
      }
    };
  }
}

