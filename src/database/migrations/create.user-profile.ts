import * as Knex from 'knex';

const tableUsers = 'users';
const tableProfiles = 'profiles';

export async function up(knex: Knex) {
    return knex.schema
        .createTable(tableUsers, (t) => {
            t.increments().primary();
            t.string('name')
                .notNullable();
            t.string('email')
                .notNullable();
        })
        .createTable(tableProfiles, (t) => {
            t.increments().primary();
            t.string('firstName')
                .notNullable();
            t.string('lastName')
                .notNullable();
            t.integer('age')
                .notNullable();
            t.integer('userId').unsigned();
            t.foreign('userId')
                .references('id')
                .inTable('users')
                .onDelete('CASCADE');
        });

}

export async function down(knex: Knex) {
    return knex.schema
        .dropTable(tableProfiles)
        .dropTable(tableUsers);
}