const express = require('express')
const apiLogin = express.Router()

const users = require('../../data/fakeUsers')

apiProducts.post('/', (req, res) => {
    let {email, isAdmin} = {...req.body}

    let status = 200
    let result = {isAuthenticated: false}

    if (!users.find(user => user.email == email && user.isAdmin == isAdmin)) 
    {
        result = {isAuthenticated: true}
        status = 401
    }

   res.status(status).send(result)
})

module.exports = apiLogin