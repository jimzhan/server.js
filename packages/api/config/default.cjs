module.exports = {
  host: '0.0.0.0',
  port: 8000,
  database: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : 'password',
      database : 'postgres'
    }
  },
  session: {
    secretKeyPath: './data/secret_key' // please generate your own
  },
  // refer to https://github.com/kffl/fastify-kafkajs
  kafka: {}
}
