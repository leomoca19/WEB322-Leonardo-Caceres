const express = require('express')
const loginRoutes = express.Router()
const {template, htmlContent} = require('./htmlUtils')

const AuthenticationService = require('../services/authentication.service')

loginRoutes.get('/', (req, res)=>{
    res.send(template('Login', htmlContent()))
})

loginRoutes.post('/', (req, res)=>{
    const {username, password} = req.body
    const authentication = 
        AuthenticationService.authenticate(username, password)
    // finish later, use password and username, imporve service
    if (authentication.isAutheticated)
        res.redirect('/users')
    else
        res.send(template('Login', htmlContent('Invalid credentials. Please try again')))
})

module.exports = loginRoutes