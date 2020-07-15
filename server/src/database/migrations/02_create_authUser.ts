import Knex from 'knex'

//CRIAR TABELAS
export async function up(Knex: Knex){
 return Knex.schema.createTable('user', table =>{
    table.increments('id');
    table.string('name').notNullable();
    table.string('surname').unique().notNullable();

    table.timestamp('created_at').defaultTo(Knex.fn.now());
    table.timestamp('updated_at').defaultTo(Knex.fn.now());

    table.string('email').unique ().notNullable();
    table.string('password').notNullable();

    table.string('passwordResetToken');
    table.timestamp('passwordResetExpires').defaultTo(Knex.fn.now());
    
    
   

    
  });


  
}

//VOLTAR ATRAS (DELETAR  A TEBELA)
export async function down(Knex: Knex){
return Knex.schema.dropTable('user');
}
