const express = require('express')
const loginRoutes = express.Router()
const {template, htmlContent} = require('./htmlUtils')

const users = require('../data/fakeUsers.json')

loginRoutes.get('/', (req, res)=>
    res.send(template('Login', htmlContent()))
)

loginRoutes.post('/', (req, res)=>{
    let { username, password } = req.body

    let user = users.find((user) => 
        `${user.firstName} ${user.lastName}` == username
    )

    if (username === 'admin' && password === 'password' || ( user && user.password == password))
        res.redirect('/users')
    else
        res.send(template('Login', htmlContent('Invalid credentials. Please try again')))
})

module.exports = loginRoutes