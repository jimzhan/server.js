# server.js

Web server application startup kit with set of best practices.


## Components

- [ ] Passport.js (incl. local PG user pool)
  - [ ] Authenticate strategy set up in `lib/authenticator.js`
  - [ ] PG user pool
- [x] Knex.js
- [x] Kafka Connector
  - Uncomment the registration in `lib/server.js`
- [x] Swagger Integration
- [ ] Move to Monorepo (nx)
- [ ] Core package
- [ ] DB package
- [ ] **TBD** autod integration

# Setup
- Generate session secret key file and update the config file with the file path:  
  ```npx @fastify/secure-session > [path to secret-key file]```  
  if you fail the `npx` one, try:  
  ```./node_modules/@fastify/secure-session/genkey.js > [path to secret-key file]```
- Update DB configuration 
- If Kafka is requried, enable Kafka in `server.js` and update relevant config
