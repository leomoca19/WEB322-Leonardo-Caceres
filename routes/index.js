const express = require('express')

const loginRoutes = require('./login')
const userRoutes = require('./users')

const routes = express.Router()

routes.use('/', loginRoutes)
routes.use('/users', userRoutes)

module.exports = routes
