import Knex from 'knex'


export async function up(Knex: Knex){
  return Knex.schema.createTable('produto', table =>{
     table.increments('id').primary();
     table.string('image').notNullable();
     table.string('name').notNullable();
     table.string('description').notNullable();
     table.decimal('value').notNullable();
     
      
    

     
   });
 }
 
 export async function down(Knex: Knex){
 return Knex.schema.dropTable('produto');
 }
 