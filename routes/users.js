const express = require('express')
const userRoutes = express.Router()
const {template, htmlContent} = require('./htmlUtils')


//Data structure
const users = require('../data/fakeUsers')

userRoutes.get('/', (req,res)=>{
    const userList = users.map(users => 
        `<li><a href="/${users.id}">${users.firstName} ${users.lastName}</a></li>`
    )

    res.send(template('Users', `<ul>${userList.join('')}</ul>`))
})

userRoutes.get('/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id == id)

    res.send(template('Details', 
        `<div>${id} ${user.firstName} ${user.lastName}</div>`))
})

module.exports = userRoutes