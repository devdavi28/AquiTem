import Knex from 'knex';

export async function seed(knex: Knex){
 await  knex('items').insert([
    {title:'Merceraria', image:'mercearia.png'},
    {title:'Padaria', image:'baterias.svg'},
    {title:'Academia', image:'papeis-papelao.svg'},
    {title:'Barbearia', image:'eletronicos.svg'},
    {title:'HortFrut', image:'organicos.svg'},
    
  ]);
}