const Knex = require('knex');
const path = require('path'); // uni caminhos de acordo com o sistema operacional

const connection = Knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true,
});

module.exports = connection;