import Fastify from 'fastify'
import cors from '@fastify/cors'
import formbody from '@fastify/formbody'
import helmet from '@fastify/helmet'
import swagger from '@fastify/swagger'
import pressure from '@fastify/under-pressure'
import { nanoid } from 'nanoid'
import logger from './logger.js'

const server = Fastify({
  logger,
  requestIdLogLabel: 'traceId',
  genReqId: request => request.headers['x-request-id'] ||
    request.headers['x-trace-id'] ||
    nanoid()
})

server.register(cors)

server.register(formbody)

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
    healthCheck: async () => {
      // @TODO: any required checkpoints.
      return true
    },
    message: 'Under Pressure 😯',
    exposeStatusRoute: '/status',
    healthCheckInterval: 5000
  }
})

export default server
