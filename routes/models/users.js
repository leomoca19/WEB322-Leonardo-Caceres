const express = require('express')
const apiUsers = express.Router()

const UsersService = require('../../services/users.service')

apiUsers.get('/', (req, res) => 
    res.send(UsersService.findAll())
)

apiUsers.get('/:id', async (req, res) => {
    let userWithOrders = await UsersService.findByIdWithOrders(req.params.id)

    if (userWithOrders)
        res.json(userWithOrders)
    else
        res.status(404).json({ error: 'User not found' })
})

apiUsers.delete('/:id', (req,res) =>
    res.send(UsersService.delete(req.params.id))
)

apiUsers.post('/', (req,res) => 
    res.send(UsersService.create({...req.body})) 
)


module.exports = apiUsers