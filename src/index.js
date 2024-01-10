import config from 'config'
import server from './lib/server.js'

server.listen({
  host: config.get('host'),
  port: config.get('port')
}, err => {
  if (err) throw err
})
