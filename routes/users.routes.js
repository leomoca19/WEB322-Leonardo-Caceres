const express = require('express')
const userRoutes = express.Router()
const {template, htmlContent} = require('./htmlUtils')

//Data structure
const users = require('../data/fakeUsers')


userRoutes.get('/', (req, res)=>{
    res.send(template('Login', htmlContent()))
})
userRoutes.post('/', (req, res)=>{
    const {username, password} = req.body
    console.log(`user ${username} | pass ${password}`)

    //change later for email and password from dbs
    if (username === 'admin' && password === 'admin')
        res.redirect('/list')
    else
        res.send(template('Login', htmlContent('Invalid credentials. Please try again')))
})

userRoutes.get('/list', (req,res)=>{
    const userList = users.map(users => 
        `<li><a href="/detail/${users.id}">${users.firstName} ${users.lastName}</a></li>`
    )

    const content = `<ul>${userList.join('')}</ul>`

    res.send(template('List', content))
})

userRoutes.get('/detail/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id == id)

    const content = 
        `<div>${id} ${user.firstName} ${user.lastName}</div>`
    res.send(template('Detail', content))
})

module.exports = userRoutes