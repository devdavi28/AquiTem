import Knex from 'knex'


export async function up(Knex: Knex){
  return Knex.schema.createTable('pedido', table =>{
     table.increments('id').primary();
      
    
     table.integer('user_id')
     .notNullable()
     .references('id')
     .inTable('user')
     .onDelete('CASCADE')


     table.decimal('value')

     table.timestamps(true, true)
  

          
   });
 }
 
 export async function down(Knex: Knex){
 return Knex.schema.dropTable('pedido');
 }
 