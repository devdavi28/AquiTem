const Knex = require('../database/connection');

module.exports = {

  async index(request, response) {
    const items = await Knex('items').select('*');

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.104:3333/uploads/${item.image}`,
      };
    });
    return response.json(serializedItems);
  }
}

