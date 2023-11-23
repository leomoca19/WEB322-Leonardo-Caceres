const express = require('express')

const apiUsers = require('./models/users')
const apiProducts = require('./models/products')

const apiRoutes = express.Router()


// apiRoutes.use('/api/login', apiLogin)
apiRoutes.use('/api/users', apiUsers)
apiRoutes.use('/api/products', apiProducts)


module.exports = apiRoutes
