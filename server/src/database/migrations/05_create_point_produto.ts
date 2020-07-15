import Knex from 'knex'


export async function up(Knex: Knex){
  return Knex.schema.createTable('point_produto', table =>{
     table.increments('id').primary();
     
     table.integer('point_id')
     .notNullable()
     .references('id')
     .inTable('points');

     table.integer('produto_id')
     .notNullable()
     .references('id')
     .inTable('produto');
    
     
   });
 }
 

 export async function down(Knex: Knex){
 return Knex.schema.dropTable('point_produto');
 }
 