import Knex from 'knex';

export async function seed(knex: Knex){
 await  knex('user').insert([
    {name:'David', surname:'Silva', email:'sdavi28@hotmail', password:'123456'},
     
  ]);
}
