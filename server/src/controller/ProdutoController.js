const Knex = require('../database/connection');

module.exports = {

  async index(request, response) {
    const produto = await Knex('produto').select('*');

    const serializedProduto = produto.map(produto => {
      return {
        id: produto.id,
        name: produto.name,
        description: produto.description,
        value: produto.value,
        image_url: `http://192.168.0.104:3333/uploads/${produto.image}`,
      };
    });
    return response.json(serializedProduto);
  }
}
