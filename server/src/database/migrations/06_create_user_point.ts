import Knex from 'knex'


export async function up(Knex: Knex){
  return Knex.schema.createTable('user_point', table =>{
     table.increments('id').primary();
     
     table.integer('user_point_id')
     .notNullable()
     .references('id')
     .inTable('points');

     table.integer('user_id')
     .notNullable()
     .references('id')
     .inTable('authUser');
    
     
   });
 }
 

 export async function down(Knex: Knex){
 return Knex.schema.dropTable('point_items');
 }
 