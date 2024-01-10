import { pino } from 'pino'
import Pretty from 'pino-pretty'

const stream = Pretty({
  colorizeObjects: true,
  levelFirst: true,
  translateTime: 'yyyy-mm-dd HH:MM:ss',
  ignore: 'hostname,pid',
  append: true,
  messageFormat: '{msg}',
  colorize: true,
  sync: true
})

export default pino(stream)
