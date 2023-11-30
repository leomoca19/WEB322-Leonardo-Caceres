const express = require('express')
const apiUsers = express.Router()

const users = require('../../data/fakeUsers')

apiUsers.get('/', (req, res) => 
    res.send(users)
)

apiUsers.get('/:id', (req,res) =>{
    const id = req.params.id
    const user = users.find(user => user.id == id)

    res.send(user)
})

apiUsers.delete('/:id', (req,res) =>{
    const id = req.params.id
    const user = users.find(user => user.id == id)

    users.filter((id) => id != user.id)
})

apiUsers.post('/', (req,res) =>{
    let newUser = {...req.body} //verify if works as expected
    users.push(newUser)
    res.send(newUser)
})


module.exports = apiUsers