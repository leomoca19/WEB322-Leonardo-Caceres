const express = require('express')
const userRoutes = express.Router()
const {template, htmlContent} = require('./htmlUtils')


//Data structure
const users = require('../data/fakeUsers')


userRoutes.get('/users', (req,res)=>{
    const userList = users.map(users => 
        `<li><a href="/detail/${users.id}">${users.firstName} ${users.lastName}</a></li>`
    )

    const content = `<ul>${userList.join('')}</ul>`

    res.send(template('Users', content))
})

userRoutes.get('/detail/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id == id)

    const content = 
        `<div>${id} ${user.firstName} ${user.lastName}</div>`
    res.send(template('Detail', content))
})

module.exports = userRoutes