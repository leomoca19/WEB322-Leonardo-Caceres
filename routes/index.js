const express = require('express')

const loginRoutes = require('./login')
const userRoutes = require('./users')

const routes = express.Router()

routes.use('/', userRoutes)
routes.use('/users', loginRoutes)

module.exports = routes
