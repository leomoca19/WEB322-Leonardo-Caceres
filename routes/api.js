const express = require('express')
const apiRoutes = express.Router()
const {template, userDetails} = require('./htmlUtils')

const users = require('../data/fakeUsers')

apiRoutes.get('/users', (req, res) => 
    res.send(template('Users', JSON.stringify(users)))
)

apiRoutes.get('/users/:id', (req,res) =>{
    const id = req.params.id
    const user = users.find(user => user.id == id)

    res.send(template('Details', userDetails(user)))
})

apiRoutes.delete('/users/:id', (req,res) =>{
    const id = req.params.id
    const user = users.find(user => user.id == id)

    users.filter((id) => id != user.id)
})

apiRoutes.post('/users', (req,res) =>{
    let newUser = {...req.body} //verify if works as expected
    users.push(newUser)
    res.json.stringify(newUser)
})

module.exports = apiRoutes