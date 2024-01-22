import Fastify from 'fastify'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import swagger from '@fastify/swagger'
import pressure from '@fastify/under-pressure'
import { nanoid } from 'nanoid'
import logger from './logger.js'

const server = Fastify({
  logger,
  requestIdLogLabel: 'traceId',
  genReqId: (request) => nanoid()
})

server.register(cors)

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

server.register(pressure, () => {
  return {
    healthCheck: async function() {
      // @TODO: any required checkpoints.
      return true
    },
    message: 'Under Pressure 😯',
    exposeStatusRoute: '/status',
    healthCheckInterval: 5000
  }
})

export default server
