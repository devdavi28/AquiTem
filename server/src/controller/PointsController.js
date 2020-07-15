
const Knex = require('../database/connection');

module.exports = {

  //buscar varios filtrados
  async index(request, response) {
    //filter
    //cidade, uf, items (Query Params)
    const { city, uf, items } = request.query;

    const parseItems = String(items)
      .split(',')
      .map(item => Number(item.trim()));

    const points = await Knex('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', parseItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*')

    const serializedPoints = points.map(point => {
      return {
        ...point,
        image_url: `http://192.168.0.104:3333/uploads/${point.image}`,
      };
    });
    return response.json(serializedPoints);


  },

  //buscar um ponto
  async show(request, response, next) {

    try {
      const { id } = request.params;

      const point = await Knex('points').where('id', id).first();


      if (!point) {
        return response.status(400).json({ message: 'Point not foun.' });
      }
      const serializedPoints = {

        ...point,
        image_url: `http://192.168.0.104:3333/uploads/${point.image}`,
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
        email,
        whatsapp,
        salesmn,
        horario,
        departament,
        latitude,
        longitude,
        city,
        uf,
        items,

      } = request.body;

      //metodo transição para criar as query relacionais
      const trx = await Knex.transaction();
      //inserindo os ponto de coletas

      const point = {
        image: request.file.filename,
        departament,
        name,
        email,
        horario,
        whatsapp,
        salesmn,
        latitude,
        longitude,
        city,
        uf,
      }
      const insertedIds = await trx('points').insert(point);

      const point_id = insertedIds[0];

      const pointItems = items
        .split(',')
        .map((item) => Number(item.trim()))
        .map((item_id) => {
          return {
            item_id,
            point_id,

          }
        })
      //inserindo os items (relacionamentos)
      await trx('point_items').insert(pointItems)

      await trx.commit(); //origatório apos usar a função trx

      return response.json({
        id: point_id,
        ...point,
      })
    } catch (error) {
      next(error)
    }
  }

}
