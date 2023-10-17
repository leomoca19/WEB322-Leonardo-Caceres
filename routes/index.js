const express = require('express')
const userRoutes = require('./users.routes')
const productRoutes = require('./products.routes')

const routes = express.Router()
routes.use('/users', userRoutes)
routes.use('/products', productRoutes)

module.exports = routes
