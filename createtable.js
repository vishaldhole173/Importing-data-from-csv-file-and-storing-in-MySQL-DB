
const options = {
    client: 'mysql2',
    version: '8.0.27',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : '9850500930',
      database : 'userdata'
    }
}

const knex = require('knex')(options);

knex.schema.createTable('users', (table) => {
  table.increments('id')
  table.string('email')
  table.string('firstname')
  table.string('lastname')
}).then(() => console.log("table created"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
      knex.destroy();
  });