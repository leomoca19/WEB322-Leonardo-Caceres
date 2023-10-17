const express = require('express')
const userRoutes = require('./users.routes')

const routes = express.Router()
routes.use('/', userRoutes)

module.exports = routes
