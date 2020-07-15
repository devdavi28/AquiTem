import Knex from 'knex'


export async function up(Knex: Knex){
  return Knex.schema.createTable('points', table =>{
     table.increments('id').primary();
     table.string('image').notNullable();
     table.string('name').notNullable().unique();
     table.string('email').notNullable().unique();
     table.string('whatsapp').notNullable();
     table.string('departament');
     table.string('salesmn');
     table.string('horario');
     table.decimal('longitude').notNullable();
     table.decimal('latitude').notNullable();

     table.string('city').notNullable();
     table.string('uf',2).notNullable();
     
    

     
   });
 }
 
 export async function down(Knex: Knex){
 return Knex.schema.dropTable('points');
 }
 