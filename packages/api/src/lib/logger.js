import { pino } from 'pino'
import Pretty from 'pino-pretty'

export default pino(Pretty({
  colorizeObjects: true,
  levelFirst: true,
  translateTime: 'yyyy-mm-dd HH:MM:ss',
  ignore: 'hostname,pid',
  append: true,
  messageFormat: '{msg}',
  colorize: true,
  sync: true
}))
