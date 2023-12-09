const express = require('express')
const loginRoutes = express.Router()
const {template, htmlContent} = require('./htmlUtils')

const AuthenticationService = require('../services/authentication.service')

loginRoutes.get('/', (req, res)=>
    res.send(template('Leonardo de la Mora Caceres', htmlContent()))
)

loginRoutes.post('/', (req, res)=>{
    const { username, password } = req.body;
    const authentication = AuthenticationService.authenticate(username, password)

    if (authentication.isAuthenticated) {
        req.session.auth = authentication
        res.redirect(`/users`)
    } 
      else 
        res.redirect("/")
})


module.exports = loginRoutes