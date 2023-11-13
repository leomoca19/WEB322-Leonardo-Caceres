const express = require('express')

const loginRoutes = require('./login')
const userRoutes = require('./users')
const apiRoutes = require('./api')

const routes = express.Router()

routes.use('/', loginRoutes)
routes.use('/users', userRoutes)
routes.use('/api', apiRoutes)
module.exports = routes
