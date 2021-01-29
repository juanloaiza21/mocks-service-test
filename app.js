const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('services.json')
const middlewares = jsonServer.defaults()

require('dotenv').config()
 
let port  =  process.env.PORT || 3001
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log(`Mock Services runnig  port ${port}`)
})