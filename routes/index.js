const express = require('express')

const loginRoutes = require('./login')
const userRoutes = require('./users')
const apiUsers = require('./models/users')
const apiProducts = require('./models/products')

const routes = express.Router()

routes.use('/', loginRoutes)
routes.use('/users', userRoutes)
routes.use('/api/users', apiUsers)
routes.use('/api/products', apiProducts)

module.exports = routes
