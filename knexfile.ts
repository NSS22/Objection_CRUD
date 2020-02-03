import * as Knex from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import * as dotenv from 'dotenv';
dotenv.config();

module.exports = {
    client: 'pg',
    connection: process.env.PG_CONNECTION,
    migrations: {
        directory: './src/database/migrations',
        stub: './src/database/migration.stub',
    },
    ...knexSnakeCaseMappers()
} as Knex.Config;