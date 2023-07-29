// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgres',
    connection: {
      host: 'containers-us-west-121.railway.app',
      database: 'TinderHabilidades',
      port: '6887',
      user: 'postgres',
      password: 'vf1cYLoscBtux7qFxDrU',
    },
    useNullAsDefault: true,
  },

 

  production: {
    client: 'postgres',
    connection: {
      host: 'containers-us-west-121.railway.app',
      database: 'TinderHabilidades',
      port: '6887',
      user: 'postgres',
      password: 'vf1cYLoscBtux7qFxDrU',
    },
    useNullAsDefault: true,
  },

};
