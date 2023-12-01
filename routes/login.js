const express = require('express')
const loginRoutes = express.Router()
const {template, htmlContent} = require('./htmlUtils')

const AuthenticationService = require('../services/authentication.service')

loginRoutes.get('/', (req, res)=>{
    res.send(template('Login', htmlContent()))
})

loginRoutes.post('/', (req, res)=>{
    const {username, password} = req.body
        
    if (AuthenticationService.authenticate(username, password))
        res.redirect('/users')
    else
        res.send(template('Login', htmlContent('Invalid credentials. Please try again')))
})

module.exports = loginRoutes