import config from 'config'
import Fastify from 'fastify'

const server = Fastify()

server.listen({ port: config.get('port') }, err => {
  if (err) throw err
  console.log(
    `Server started listening on <${config.get('host')}:${config.get('port')}> `
  )
})
