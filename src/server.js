const routes = require("./routes")
const express = require("express")
const server = express()

server.set('view engine', 'ejs')

// Habilitar arquivos statics
server.use(express.static("public"))

// usar o req.body
server.use(express.urlencoded({ extended: true }))

// routes.
server.use(routes)

server.listen(3000, () => console.log('rodando'))