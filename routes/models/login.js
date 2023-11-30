const express = require('express')
const apiLogin = express.Router()

const UsersService = require('../../services/users.service')
const AuthenticationService = require('../../services/authentication.service')

const users = UsersService.findAll()

apiLogin.post('/', (req, res) => {
    let {email} = {...req.body}

    let status = 200
    let result = {isAuthenticated: false}

    let foundUser = UsersService.findByEmail(email)

    if (foundUser && foundUser.isAuthenticated) 
    {
        result = {isAuthenticated: true}
        status = 401
    }

   res.status(status).send(result)
})

module.exports = apiLogin