
const Knex = require('../database/connection');

module.exports = {


  async index(request, response, next) {
    try {

      const { points_id, page = 1 } = request.query;

      const query = Knex('produto')
        .limit(5)
        .offset((page - 1) * 5)

      if (points_id) {
        query.where({ points_id })
          .join('points', 'points.id', '=', 'produto.points_id')
          .select('produto.*', 'points.name');
      }


      const results = await query

      return response.json(results)

    } catch (error) {
      next(error)
    }

  },


  async create(request, response, next) {
    try {
      const {
        name,
        description,
        value,
        points_id
      } = request.body;

      await Knex('produto').insert({
        name,
        image: request.file.filename,
        description,
        value,
        points_id
      })

      return response.status(201).send()


    } catch (error) {
      next(error)
    }
  }

}
