// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.SECRET_KEY_HOST,
      database: process.env.SECRET_KEY_DB,
      user: process.env.SECRET_KEY_USER,
      password: process.env.SECRET_KEY_PASS,
      charset: 'utf8'
    },
    migrations: {
     directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds'
    }
  }
  
};
