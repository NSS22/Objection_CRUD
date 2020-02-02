import { Model } from 'objection';
import { UserProfile } from '../users-profile/user-profile.entity';

export class User extends Model {
  static get tableName() {
    return 'users';
  }

  readonly id: number;
  name: string;
  email: string;
  profile?: UserProfile;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 24 },
        email: { type: 'string', minLength: 1, maxLength: 48 },
      }
    };
  }

  static get relationMappings() {
    return {
        userProfile: {
        relation: Model.HasOneRelation,
        modelClass: `${__dirname}/../users-profile/user-profile.entity`,
        join: {
          from: 'users.id',
          to: 'profiles.userId'
        }
      }
    };
  }
}

