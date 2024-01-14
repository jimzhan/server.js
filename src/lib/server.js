import Fastify from 'fastify'
import helmet from '@fastify/helmet'
import swagger from '@fastify/swagger'
import logger from './logger.js'

const server = Fastify({ logger })

server.register(helmet, {
  noCache: true,
  policy: 'same-origin',
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      imgSrc: ["'self'", 'data:'],
      scriptSrc: ["'self' 'unsafe-inline'"]
    }
  }
})

server.register(swagger, () => ({
  routePrefix: '/docs',
  exposeRoute: true
}))

export default server
