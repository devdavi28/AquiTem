
const Knex = require('../database/connection');

//item = points
//points  = produtos


module.exports = {

  //buscar varios filtrados
  async index(request, response) {

    const { name, points, description } = request.query;

    const parseProduto = String(produto)
      .split(',')
      .map(produto => Number(produto.trim()));

    const produto = await Knex('produto')
      .join('point_produto', 'produto.id', '=', 'point_produto.point_id')
      .whereIn('point_produto.point_id', parseItems)
      .where('name', String(name))
      .where('description', String(description))
      .distinct()
      .select('produto.*')

    const serializedProduto = produto.map(produto => {
      return {
        ...produto,
        image_url: `http://192.168.0.104:3333/uploads/${produto.image}`,
      };
    });
    return response.json(serializedProduto);


  },

  //buscar um produto
  async show(request, response, next) {

    try {
      const { id } = request.params;

      const produto = await Knex('produto').where('id', id).first();


      if (!produto) {
        return response.status(400).json({ message: 'Produto not foun.' });
      }
      const serializedProduto = {

        ...produto,
        image_url: `http://192.168.0.104:3333/uploads/${produto.image}`,
      };


      //Retorna os Items Relacionados com o ID

      const items = await Knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id);


      return response.json({ point: serializedPoints, items });
    } catch (error) {
      next(error) //mostrao erro no servidor
    }

  },





  async create(request, response, next) {
    try {
      const {
        name,
        image,
        description,
        value,
        points,


      } = request.body;

      //metodo transição para criar as query relacionais
      const trx = await Knex.transaction();
      //inserindo os ponto de coletas

      const produto = {
        name,
        image,
        description,
        value,


      }
      const insertedIds = await trx('produto').insert(produto);

      const produto_id = insertedIds[0];

      const produtoPoints = points
        .split(',')
        .map((point) => Number(point.trim()))
        .map((points_id) => {
          return {
            points_id,
            produto_id,

          }
        })
      //inserindo os items (relacionamentos)
      await trx('point_produto').insert(produtoPoints)

      await trx.commit(); //origatório apos usar a função trx

      return response.json({
        id: point_id,
        ...produto,
      })
    } catch (error) {
      next(error)
    }
  }

}
