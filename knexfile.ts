import * as Knex from 'knex';
import { knexSnakeCaseMappers } from 'objection';

module.exports = {
    client: 'pg',
    connection: 'postgres://postgres:nss22@127.0.0.1:5432/user_profile',
    migrations: {
        directory: './src/database/migrations',
        stub: './src/database/migration.stub',
    },
    ...knexSnakeCaseMappers()
} as Knex.Config;