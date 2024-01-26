import config from 'config'
import fs from 'fs'
import fastifyPassport from '@fastify/passport'
import fastifySecureSession from '@fastify/secure-session'

const apply = (server) => {
  server.register(fastifySecureSession, { key: fs.readFileSync(config.get('session.secretKeyPath')) })
  server.register(fastifyPassport.initialize())
  server.register(fastifyPassport.secureSession())

  // @TODO register required strategy to authenticate users, refer to this link for all Passport strategies: https://www.passportjs.org/packages/
  // fastifyPassport.use('test', new SampleStrategy())
}

export default {
  apply
}