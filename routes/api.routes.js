const express = require('express')

const apiUsers = require('./models/users')
const apiProducts = require('./models/products')

const apiRoutes = express.Router()


// apiRoutes.use('/api/login', apiLogin)
apiRoutes.use('/users', apiUsers)
apiRoutes.use('/products', apiProducts)


apiProducts.post('/', (req, res) => {
    let users = require('../../data/fakeUsers')
    let {email, isAdmin} = {...req.body}


    let status = 200
    let result = {isAuthenticated: true}


    if (!users.find(
        user => user.email == email && user.isAdmin == isAdmin
        )) {
            result = {isAuthenticated: true}
            status = 401
        }

   res.status(status).send(result)
})

module.exports = apiRoutes
