const express = require('express')
const userRoutes = express.Router()
const {template, userDetails, table, userForm} = require('./htmlUtils')
const UsersService = require('../services/users.service')


let users
let userList
const updateUserList = async() => {
    users = await UsersService.findAll()
    userList = users.map(user => `
      <tr>
        <td>${user.id}</td>
        <td><a href="/users/${user.id}">${user.firstName} ${user.lastName}</a></td>
      </tr>
    `)
}
updateUserList()


userRoutes.get('/', async (req,res)=>
    res.send(template('Users', table(userList, userForm)))
)

userRoutes.get('/:id', async (req, res) => {
    let user = await UsersService.findById(req.params.id)
    
    res.send(template('Details', userDetails(user)))
})

userRoutes.post('/', async (req,res) => {
    await UsersService.create({...req.body})
    await updateUserList()
    res.send(template('Users', table(userList, userForm)))
})

module.exports = userRoutes
