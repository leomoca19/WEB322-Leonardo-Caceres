const express = require('express')
const loginRoutes = express.Router()
const {template, htmlContent} = require('./htmlUtils')

loginRoutes.get('/', (req, res)=>{
    res.send(template('Login', htmlContent()))
})
console.log('login here')
loginRoutes.post('/', (req, res)=>{
    console.log('login here too')
    const {username, password} = req.body
    console.log(`user ${username} | pass ${password}`)

    //change later for email and password from dbs
    if (username === 'admin' && password === 'admin')
        res.redirect('/users')
    else
        res.send(template('Login', htmlContent('Invalid credentials. Please try again')))
})

module.exports = loginRoutes