const express = require('express')

const apiLogin = require('.models/login')
const apiUsers = require('./models/users')
const apiProducts = require('./models/products')


const apiRoutes = express.Router()

apiRoutes.use('/api/login', apiLogin)
apiRoutes.use('/users', apiUsers)
apiRoutes.use('/products', apiProducts)

module.exports = apiRoutes
