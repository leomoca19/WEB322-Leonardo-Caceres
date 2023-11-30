const express = require('express')
const apiUsers = express.Router()

const UsersService = require('../../services/users.service')

apiUsers.get('/', (req, res) => 
    res.send(UsersService.findAll())
)

apiUsers.get('/:id', (req,res) =>
    res.send(UsersService.findById(req.params.id))
)

apiUsers.delete('/:id', (req,res) =>
    users.filter((id) =>
     id != UsersService.findById(req.params.id).id)
)

apiUsers.post('/', (req,res) =>{
    let newUser = {...req.body}
    users.push(newUser)
    res.send(newUser)
})


module.exports = apiUsers