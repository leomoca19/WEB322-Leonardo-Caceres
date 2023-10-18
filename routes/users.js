const express = require('express')
const userRoutes = express.Router()
const {template} = require('./htmlUtils')


//Data structure
const users = require('../data/fakeUsers')

userRoutes.get('/', (req,res)=>{
    const userList = users.map(users => `
        <tr>
            <td>${users.id}</td>
            <td><a href="/users/${users.id}">${users.firstName} ${users.lastName}</a></td>
        </tr>
    `)

    const table = `
        <table class="user-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                ${userList.slice(0, 25).join('')}
            </tbody>
        </table>
    `

    res.send(template('Users', table))
})

userRoutes.get('/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id == id)

    res.send(template('Details', 
        `<div>${id} ${user.firstName} ${user.lastName}</div>`))
})

module.exports = userRoutes