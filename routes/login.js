const express = require('express')
const loginRoutes = express.Router()
const {template, htmlContent} = require('./htmlUtils')

loginRoutes.get('/', (req, res)=>{
    res.send(template('Login', htmlContent()))
})
loginRoutes.post('/', (req, res)=>{
    const {username, password} = req.body
    console.log(`user ${username} | pass ${password}`)

    //change later for email and password from dbs
    if (username === 'admin' && password === 'admin')
        res.redirect('/list')
    else
        res.send(template('Login', htmlContent('Invalid credentials. Please try again')))
})

module.exports = loginRoutes